"use client";

import { useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import {
    ArrowLeft,
    BadgeCheck,
    FileText,
    LockKeyhole,
    ShoppingBag,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { processOctanoPayment } from "@/lib/payment";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAlert } from "@/context/AlertContext";

type CheckoutStep = "summary" | "form";

interface CheckoutFormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    direccion2: string;
    ciudad: string;
    estado: string;
    pais: string;
    cp: string;
    empresa: string;
    cardNumber: string;
    cardName: string;
    cardMonth: string;
    cardYear: string;
    cardCvv: string;
}

const IVA_RATE = 0.16;

function formatCurrency(value: number) {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
    }).format(value);
}

function getOrderId() {
    const random = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `NOREXIO-${Date.now().toString().slice(-8)}-${random}`;
}

export default function CheckoutPage() {
    const t = useTranslations("checkout");
    const locale = useLocale();
    const apiLocale = locale || "es";

    const { showAlert } = useAlert();
    const { items, totalItems, clearCart } = useCart();

    const [step, setStep] = useState<CheckoutStep>("summary");
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState<CheckoutFormData>({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        direccion: "",
        direccion2: "",
        ciudad: "",
        estado: "",
        pais: "México",
        cp: "",
        empresa: "",
        cardNumber: "",
        cardName: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
    });

    const orderId = useMemo(() => getOrderId(), []);

    const subtotal = useMemo(() => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [items]);

    const iva = useMemo(() => subtotal * IVA_RATE, [subtotal]);
    const total = useMemo(() => subtotal + iva, [subtotal, iva]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const goToForm = () => {
        if (!items.length) {
            showAlert({
                title: t("alerts.emptyCartTitle"),
                type: "error",
                message: t("alerts.emptyCartMessage"),
            });
            return;
        }

        setStep("form");
    };

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!items.length) {
            showAlert({
                title: t("alerts.emptyCartTitle"),
                type: "error",
                message: t("alerts.emptyCartMessage"),
            });
            return;
        }

        setIsProcessing(true);

        try {
            const paymentResult = await processOctanoPayment({
                amount: total,
                orderId,
                cardData: {
                    number: formData.cardNumber,
                    name: formData.cardName,
                    month: formData.cardMonth,
                    year: formData.cardYear,
                    cvv: formData.cardCvv,
                },
                customer: {
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.email,
                    telefono: formData.telefono,
                    direccion: formData.direccion,
                    direccion2: formData.direccion2 || undefined,
                    ciudad: formData.ciudad,
                    estado: formData.estado,
                    pais: formData.pais,
                    cp: formData.cp,
                    empresa: formData.empresa || undefined,
                }
            });

            if (!paymentResult.success) {
                showAlert({
                    title: t("alerts.paymentErrorTitle"),
                    type: "error",
                    message:
                        paymentResult.error || t("alerts.paymentErrorMessage"),
                });
                return;
            }

            const ticketResponse = await fetch(`/${apiLocale}/api/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderId,
                    locale: apiLocale,
                    items,
                    totals: {
                        subtotal,
                        iva,
                        total,
                    },
                    customer: {
                        nombre: formData.nombre,
                        apellido: formData.apellido,
                        email: formData.email,
                        telefono: formData.telefono,
                        direccion: formData.direccion,
                        direccion2: formData.direccion2,
                        ciudad: formData.ciudad,
                        estado: formData.estado,
                        pais: formData.pais,
                        cp: formData.cp,
                        empresa: formData.empresa,
                    },
                    payment: {
                        amount: total,
                        currency: "484",
                        result: paymentResult.data,
                    },
                }),
            });

            if (!ticketResponse.ok) {
                const ticketError = await ticketResponse.json().catch(() => null);

                clearCart();

                showAlert({
                    title: t("alerts.warningTitle"),
                    type: "warning",
                    message:
                        ticketError?.error || t("alerts.ticketWarningMessage"),
                });

                return;
            }

            clearCart();

            showAlert({
                title: t("alerts.successTitle"),
                type: "success",
                message: t("alerts.successMessage"),
            });
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : t("alerts.checkoutErrorMessage");

            showAlert({
                title: t("alerts.errorTitle"),
                type: "error",
                message,
            });
        } finally {
            setIsProcessing(false);
        }
    };

    if (!items.length) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 px-6 py-28 lg:px-12">
                    <div className="mx-auto max-w-4xl rounded-[32px] border border-green-100 bg-white p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                            <ShoppingBag className="h-8 w-8 text-green-700" />
                        </div>

                        <h1 className="mb-4 text-3xl font-bold text-zinc-900">
                            {t("emptyCart.title")}
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl leading-7 text-zinc-600">
                            {t("emptyCart.description")}
                        </p>

                        <Link
                            href="/tienda"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t("emptyCart.button")}
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 px-6 py-28 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                                <BadgeCheck className="h-4 w-4" />
                                {t("hero.badge")}
                            </span>

                            <h1 className="text-4xl font-bold text-zinc-900 lg:text-6xl">
                                {t("hero.title")}
                            </h1>

                            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
                                {t("hero.description")}
                            </p>
                        </div>

                        <Link
                            href="/tienda"
                            className="inline-flex items-center gap-2 self-start rounded-2xl border border-green-200 bg-white px-5 py-3 font-semibold text-zinc-700 shadow-sm"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t("hero.backButton")}
                        </Link>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <section className="rounded-[32px] border border-green-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                                    <FileText className="h-7 w-7 text-green-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-zinc-900">
                                        {t("summary.title")}
                                    </h2>
                                    <p className="text-zinc-500">
                                        {totalItems} {t("summary.item", { count: totalItems })}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-4 rounded-3xl border border-green-100 bg-green-50/60 p-4"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-20 w-20 rounded-2xl object-cover"
                                        />

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="min-w-0">
                                                    <h3 className="truncate text-lg font-semibold text-zinc-900">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-zinc-500">
                                                        {item.category}
                                                    </p>
                                                </div>

                                                <div className="text-right">
                                                    <p className="font-semibold text-zinc-900">
                                                        {formatCurrency(item.price * item.quantity)}
                                                    </p>
                                                    <p className="text-sm text-zinc-500">
                                                        x{item.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 space-y-3 rounded-[28px] bg-zinc-50 p-6">
                                <div className="flex items-center justify-between text-zinc-700">
                                    <span>{t("totals.subtotal")}</span>
                                    <span className="font-semibold">
                                        {formatCurrency(subtotal)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-zinc-700">
                                    <span>{t("totals.iva")}</span>
                                    <span className="font-semibold">
                                        {formatCurrency(iva)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-lg text-zinc-900">
                                    <span className="font-bold">{t("totals.total")}</span>
                                    <span className="font-bold text-green-700">
                                        {formatCurrency(total)}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 rounded-[28px] border border-amber-200 bg-amber-50 p-5">
                                <p className="text-sm font-medium text-amber-900">
                                    {t("totals.taxNote")}
                                </p>
                            </div>

                            {step === "summary" ? (
                                <button
                                    type="button"
                                    onClick={goToForm}
                                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
                                >
                                    {t("actions.proceedToPayment")}
                                </button>
                            ) : null}
                        </section>

                        <section className="rounded-[32px] border border-green-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <div className="mb-8">
                                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                    <ShieldCheck className="h-4 w-4" />
                                    {t("formSection.badge")}
                                </span>

                                <h2 className="text-3xl font-bold text-zinc-900">
                                    {step === "summary"
                                        ? t("formSection.lockedTitle")
                                        : t("formSection.formTitle")}
                                </h2>

                                <p className="mt-3 leading-7 text-zinc-600">
                                    {step === "summary"
                                        ? t("formSection.lockedDescription")
                                        : t("formSection.formDescription")}
                                </p>
                            </div>

                            {step === "summary" ? (
                                <div className="rounded-[28px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                                            <LockKeyhole className="h-6 w-6 text-green-700" />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-zinc-900">
                                                {t("formSection.lockedCardTitle")}
                                            </h3>
                                            <p className="mt-1 text-zinc-600">
                                                {t("formSection.lockedCardDescription")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleCheckout} className="space-y-6">
                                    <div className="rounded-[28px] border border-green-100 bg-green-50/40 p-6">
                                        <h3 className="mb-5 text-xl font-bold text-zinc-900">
                                            {t("customer.title")}
                                        </h3>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            <Field
                                                label={t("customer.name")}
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                required
                                                autoComplete="given-name"
                                            />
                                            <Field
                                                label={t("customer.lastName")}
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleChange}
                                                required
                                                autoComplete="family-name"
                                            />
                                            <Field
                                                label={t("customer.email")}
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                autoComplete="email"
                                            />
                                            <Field
                                                label={t("customer.phone")}
                                                name="telefono"
                                                type="tel"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                autoComplete="tel"
                                            />
                                            <Field
                                                label={t("customer.company")}
                                                name="empresa"
                                                value={formData.empresa}
                                                onChange={handleChange}
                                                autoComplete="organization"
                                            />
                                        </div>
                                    </div>

                                    <div className="rounded-[28px] border border-green-100 bg-white p-6">
                                        <h3 className="mb-5 text-xl font-bold text-zinc-900">
                                            {t("address.title")}
                                        </h3>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            <Field
                                                label={t("address.address1")}
                                                name="direccion"
                                                value={formData.direccion}
                                                onChange={handleChange}
                                                required
                                                autoComplete="address-line1"
                                            />
                                            <Field
                                                label={t("address.address2")}
                                                name="direccion2"
                                                value={formData.direccion2}
                                                onChange={handleChange}
                                                autoComplete="address-line2"
                                            />
                                            <Field
                                                label={t("address.city")}
                                                name="ciudad"
                                                value={formData.ciudad}
                                                onChange={handleChange}
                                                required
                                                autoComplete="address-level2"
                                            />
                                            <Field
                                                label={t("address.state")}
                                                name="estado"
                                                value={formData.estado}
                                                onChange={handleChange}
                                                required
                                                autoComplete="address-level1"
                                            />
                                            <Field
                                                label={t("address.postalCode")}
                                                name="cp"
                                                value={formData.cp}
                                                onChange={handleChange}
                                                required
                                                autoComplete="postal-code"
                                            />
                                            <Field
                                                label={t("address.country")}
                                                name="pais"
                                                value={formData.pais}
                                                onChange={handleChange}
                                                required
                                                autoComplete="country"
                                            />
                                        </div>
                                    </div>

                                    <div className="rounded-[28px] border border-green-100 bg-green-50/40 p-6">
                                        <h3 className="mb-5 text-xl font-bold text-zinc-900">
                                            {t("card.title")}
                                        </h3>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            <Field
                                                label={t("card.number")}
                                                name="cardNumber"
                                                maxLength={16}
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                required
                                                inputMode="numeric"
                                                autoComplete="cc-number"
                                            />
                                            <Field
                                                label={t("card.name")}
                                                name="cardName"
                                                value={formData.cardName}
                                                onChange={handleChange}
                                                required
                                                autoComplete="cc-name"
                                            />
                                            <Field
                                                label={t("card.month")}
                                                name="cardMonth"
                                                value={formData.cardMonth}
                                                onChange={handleChange}
                                                required
                                                placeholder="MM"
                                                inputMode="numeric"
                                                autoComplete="cc-exp-month"
                                            />
                                            <Field
                                                label={t("card.year")}
                                                name="cardYear"
                                                value={formData.cardYear}
                                                onChange={handleChange}
                                                required
                                                placeholder="YYYY"
                                                inputMode="numeric"
                                                autoComplete="cc-exp-year"
                                            />
                                            <Field
                                                label={t("card.cvv")}
                                                name="cardCvv"
                                                type="password"
                                                value={formData.cardCvv}
                                                onChange={handleChange}
                                                required
                                                maxLength={3}
                                                inputMode="numeric"
                                                autoComplete="cc-csc"
                                            />
                                        </div>

                                        <div className="flex flex-row justify-between gap-6 p-6">
                                            <Image
                                                src="/etomin.png"
                                                alt={t("paymentLogos.octanoAlt")}
                                                width={150}
                                                height={30}
                                            />
                                            <Image
                                                src="/secure-payment.png"
                                                alt={t("paymentLogos.secureAlt")}
                                                width={150}
                                                height={30}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full rounded-2xl bg-zinc-900 px-6 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {isProcessing
                                            ? t("actions.processing")
                                            : t("actions.payNow")}
                                    </button>
                                </form>
                            )}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function Field({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false,
    placeholder,
    inputMode,
    autoComplete,
    maxLength,
}: {
    label: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    required?: boolean;
    placeholder?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    autoComplete?: string;
    maxLength?: number;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                inputMode={inputMode}
                autoComplete={autoComplete}
                maxLength={maxLength}
                className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-200"
            />
        </div>
    );
}