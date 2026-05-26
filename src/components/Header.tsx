"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Sparkles, X } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useContact } from "@/hooks/useContact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
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
      asunto: "",
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
      mensaje: formData.asunto,
      asunto: "Solicitud de estrategia personalizada",
    });

    if (response.success) {
      setStatus({
        type: "success",
        message: "Tu solicitud fue enviada correctamente. Te contactaremos pronto.",
      });

      resetForm();

      setTimeout(() => {
        setIsDrawerOpen(false);
      }, 1500);
    } else {
      setStatus({
        type: "error",
        message: response.error || "Ocurrió un error al enviar tu solicitud.",
      });
    }
  };

  return (
    <>
      <header className="top-0 left-0 right-0 z-40 bg-white border-b border-green-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo.png"
              alt="ExpertCommerce"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-zinc-800 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/solicitar-diagnostico"
                className="text-zinc-800 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
              >
                Solicitar Diagnóstico
              </Link>
            </li>

            <li>
              <Link
                href="/tienda"
                className="text-zinc-800 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
              >
                Tienda
              </Link>
            </li>

            <li>
              <Link
                href="/#contacto"
                className="text-zinc-800 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
              >
                Contacto
              </Link>
            </li>

            {/* CTA */}
            <li>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold shadow-[0_10px_25px_rgba(34,197,94,0.25)] transition-transform hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                Solicitar estrategia personalizada
              </button>
            </li>

            {/* Cart */}
            <li>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-zinc-800 hover:text-green-700 transition-colors duration-300"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-6 h-6" />

                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button & Cart */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-semibold shadow-[0_10px_20px_rgba(34,197,94,0.25)]"
            >
              Estrategia
            </button>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-zinc-800 hover:text-green-700 transition-colors duration-300"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              className="p-2 text-zinc-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden z-[65] bg-white border-b border-green-100 shadow-[0_20px_40px_rgba(0,0,0,0.10)]">
              <ul className="flex flex-col p-6 gap-3">
                <li>
                  <Link
                    href="/"
                    className="block rounded-2xl px-4 py-3 text-zinc-800 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/solicitar-diagnostico"
                    className="block rounded-2xl px-4 py-3 text-zinc-800 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solicitar Diagnóstico
                  </Link>
                </li>

                <li>
                  <Link
                    href="/tienda"
                    className="block rounded-2xl px-4 py-3 text-zinc-800 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tienda
                  </Link>
                </li>

                <li>
                  <Link
                    href="#contacto"
                    className="block rounded-2xl px-4 py-3 text-zinc-800 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>

                <li className="pt-2">
                  <button
                    onClick={() => {
                      setIsDrawerOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
                  >
                    Solicitar estrategia personalizada
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[80]"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-[90] shadow-2xl flex flex-col animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-100 bg-white">
              <div>
                <span className="inline-flex px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">
                  Estrategia personalizada
                </span>

                <h2 className="text-2xl font-bold text-zinc-900">
                  Hablemos de tu ecommerce
                </h2>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-11 h-11 rounded-2xl bg-zinc-100 hover:bg-green-100 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 text-zinc-700" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <p className="text-zinc-600 leading-7 mb-8">
                Cuéntanos qué quieres construir, optimizar o escalar. Revisaremos tu proyecto y te ayudaremos a definir la mejor estrategia digital para tu ecommerce.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Nombre
                  </label>

                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Describe tu proyecto
                  </label>

                  <textarea
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Ejemplo: Quiero mejorar conversiones, automatizar campañas, escalar Shopify y optimizar la experiencia de compra..."
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 resize-none focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                {status.type && (
                  <div
                    className={`rounded-2xl px-5 py-4 text-sm font-medium ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl transition-colors shadow-[0_10px_25px_rgba(34,197,94,0.25)] disabled:opacity-50"
                >
                  {isLoading ? "Enviando solicitud..." : "Solicitar estrategia personalizada"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}