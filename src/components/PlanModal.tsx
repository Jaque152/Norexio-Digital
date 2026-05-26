"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    ArrowLeft,
    Check,
    Minus,
    Plus,
    ShoppingCart,
} from "lucide-react";

import { Plan } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface PlanModalProps {
    plan: Plan | null;
    isOpen: boolean;
    onClose: () => void;
}

const IVA_RATE = 0.16;

const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
    }).format(price);

export default function PlanModal({
    plan,
    isOpen,
    onClose,
}: PlanModalProps) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        setQuantity(1);
    }, [plan]);

    if (!isOpen || !plan) return null;

    const subtotal = plan.price * quantity;
    const iva = subtotal * IVA_RATE;
    const total = subtotal + iva;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(plan);
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
            {/* Top Bar */}
            <div className="sticky top-0 z-20 border-b border-emerald-100 bg-white/95 backdrop-blur">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />

                        <span className="font-medium">
                            Volver a servicios
                        </span>
                    </button>

                    <div className="hidden md:flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 text-emerald-700" />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Servicio Ecommerce
                            </p>

                            <h2 className="font-semibold text-gray-900">
                                {plan.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="px-6 lg:px-10 py-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 aspect-square shadow-sm">
                            <Image
                                src={plan.image}
                                alt={plan.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                                Ecommerce
                            </span>

                            <span className="inline-flex px-4 py-2 rounded-full bg-white border border-emerald-100 text-gray-700 text-sm font-medium">
                                Servicio Profesional
                            </span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:sticky lg:top-28">
                        <span className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                            Solución estratégica
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            {plan.title}
                        </h1>

                        {plan.description && (
                            <p className="text-lg text-gray-600 leading-8 mb-8">
                                {plan.description}
                            </p>
                        )}

                        {/* Features */}
                        {plan.features && plan.features.length > 0 && (
                            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-8 mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    Incluye
                                </h2>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>

                                            <span className="text-gray-700 leading-7">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Pricing */}
                        <div className="rounded-[2rem] border border-emerald-100 bg-white shadow-sm p-8">
                            <div className="pb-6 border-b border-emerald-100">
                                <p className="text-sm text-gray-500 mb-2">
                                    Precio base
                                </p>

                                <div className="flex items-end gap-3">
                                    <h3 className="text-4xl font-bold text-emerald-700">
                                        {formatPrice(plan.price)}
                                    </h3>

                                    <span className="text-gray-500 mb-1">
                                        MXN + IVA
                                    </span>
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center justify-between py-6 border-b border-emerald-100">
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Cantidad
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Ajusta la cantidad del servicio
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((prev) =>
                                                Math.max(1, prev - 1)
                                            )
                                        }
                                        className="w-11 h-11 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 flex items-center justify-center transition-colors"
                                    >
                                        <Minus className="w-4 h-4 text-emerald-700" />
                                    </button>

                                    <div className="w-14 text-center text-xl font-bold text-gray-900">
                                        {quantity}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                        className="w-11 h-11 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 flex items-center justify-center transition-colors"
                                    >
                                        <Plus className="w-4 h-4 text-emerald-700" />
                                    </button>
                                </div>
                            </div>

                            {/* Totals */}
                            <div className="space-y-4 py-6">
                                <div className="flex items-center justify-between text-gray-600">
                                    <span>Subtotal</span>

                                    <span>{formatPrice(subtotal)}</span>
                                </div>

                                <div className="flex items-center justify-between text-gray-600">
                                    <span>IVA</span>

                                    <span>{formatPrice(iva)}</span>
                                </div>

                                <div className="flex items-center justify-between text-2xl font-bold text-gray-900 pt-4 border-t border-emerald-100">
                                    <span>Total</span>

                                    <span className="text-emerald-700">
                                        {formatPrice(total)}
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-100"
                            >
                                <ShoppingCart className="w-5 h-5" />

                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}