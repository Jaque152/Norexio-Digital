"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export default function Page() {
    const { sendContactForm, isLoading } = useContact();

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        tienda: "",
        sitio: "",
        mensaje: "",
    });

    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            email: "",
            telefono: "",
            tienda: "",
            sitio: "",
            mensaje: "",
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus({
            type: null,
            message: "",
        });

        const response = await sendContactForm({
            ...formData,
            asunto: `Nuevo lead ecommerce - ${formData.tienda || "Expert Commerce"
                }`,
        });

        if (response.success) {
            setStatus({
                type: "success",
                message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
            });

            resetForm();
        } else {
            setStatus({
                type: "error",
                message:
                    response.error ||
                    "Ocurrió un error al enviar el formulario.",
            });
        }
    };

    return (
        <>
            <Header />
            <section
                id="contacto"
                className="py-24 px-6 lg:px-12 bg-white overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-14 items-start">
                        {/* LEFT INFO */}
                        <div className=" lg:top-24">
                            <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                                Contacto
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6 font-syne">
                                Solicita tu Diagnóstico
                            </h2>

                            <p className="text-zinc-600 text-lg leading-8 mb-6">
                                Cada tienda online tiene objetivos, productos y mercados diferentes. Por eso diseñamos estrategias completamente personalizadas para impulsar el crecimiento de tu ecommerce.
                            </p>

                            <p className="text-zinc-600 text-lg leading-8 mb-10">
                                Analizamos tu tienda, identificamos oportunidades de mejora y desarrollamos una implementación estratégica adaptada a tus necesidades comerciales.
                            </p>

                            <p className="text-zinc-600 text-lg leading-8 mb-10">
                                Inlcuye
                            </p>

                            <ul className="text-zinc-600 text-lg leading-8 mb-10">
                                <li>Diagnóstico estratégico de tu tienda online</li>
                                <li>Identificación de oportunidades de crecimiento</li>
                                <li>Diseño de estrategia personalizada de ventas</li>
                                <li>Propuesta de optimización para aumentar conversiones</li>
                            </ul>


                        </div>

                        {/* FORM */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-emerald-100/30 blur-3xl rounded-full" />

                            <div className="relative bg-white border border-green-100 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-green-100/40">
                                <div className="mb-8">
                                    <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                        Formulario
                                    </span>

                                    <h3 className="text-3xl font-bold text-zinc-900 font-syne mb-3">
                                        Cuéntanos sobre tu proyecto
                                    </h3>

                                    <p className="text-zinc-600 leading-7">
                                        Responderemos tu solicitud lo antes posible.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                            Nombre *
                                        </label>

                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                                Email *
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                                Teléfono *
                                            </label>

                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                                Nombre de tu tienda *
                                            </label>

                                            <input
                                                type="text"
                                                name="tienda"
                                                value={formData.tienda}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                                Sitio web *
                                            </label>

                                            <input
                                                type="url"
                                                name="sitio"
                                                value={formData.sitio}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-zinc-700 mb-2 text-sm font-medium">
                                            Mensaje o descripción de tu proyecto *
                                        </label>

                                        <textarea
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all resize-none"
                                        />
                                    </div>

                                    {status.type && (
                                        <div
                                            className={`rounded-2xl px-5 py-4 text-sm font-medium border ${status.type === "success"
                                                ? "bg-green-50 text-green-700 border-green-200"
                                                : "bg-red-50 text-red-700 border-red-200"
                                                }`}
                                        >
                                            {status.message}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl transition-all shadow-xl shadow-green-200 hover:scale-[1.01]"
                                    >
                                        {isLoading ? "Enviando..." : "Enviar consulta"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CTABanner/>
            <Footer></Footer>
        </>
    );
}