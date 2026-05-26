"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  ShoppingCart,
  FileText,
  Sparkles,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EstrategiaPage() {
  const { addToCart, isInCart } = useCart();

  const [quoteId, setQuoteId] = useState("");
  const [storeName, setStoreName] = useState("");
  const [amount, setAmount] = useState("");

  const productId = useMemo(() => {
    return `estrategia-${quoteId || "general"}-${storeName || "store"}`;
  }, [quoteId, storeName]);

  const alreadyAdded = isInCart(productId);

  const handleAddToCart = () => {
    if (!quoteId || !storeName || !amount) {
      alert("Completa todos los campos.");
      return;
    }

    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    addToCart({
      id: productId,
      title: `Estrategia Personalizada - ${storeName}`,
      category: "Consultoría Ecommerce",
      price: numericAmount,
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      description: `
ID de cotización: ${quoteId}
Tienda online: ${storeName}
      `,
      features: [
        "Diagnóstico estratégico de tienda online",
        "Identificación de oportunidades",
        "Diseño de estrategia personalizada",
        "Optimización de conversiones",
      ],
    });

    alert("Servicio agregado al carrito.");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Estrategia personalizada para ecommerce
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              Impulsa el crecimiento
              <br />
              de tu tienda online
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-zinc-600 leading-8">
              Diseñamos una estrategia personalizada basada en el estado actual de tu ecommerce,
              oportunidades reales de crecimiento y optimización de conversiones.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="bg-white rounded-[32px] border border-green-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* IMAGE */}
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop"
                  alt="Estrategia Ecommerce"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-green-700 text-sm font-semibold shadow-lg">
                    <BadgeCheck className="w-4 h-4" />
                    Consultoría Estratégica
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-green-700" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900">
                      Incluye
                    </h2>

                    <p className="text-zinc-500">
                      Diagnóstico y estrategia personalizada
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Diagnóstico estratégico de tu tienda online",
                    "Identificación de oportunidades de crecimiento",
                    "Diseño de estrategia personalizada de ventas",
                    "Propuesta de optimización para aumentar conversiones",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50/50 p-4"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                        <BadgeCheck className="w-3.5 h-3.5 text-white" />
                      </div>

                      <p className="text-zinc-700 leading-7">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-[32px] border border-green-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 lg:p-10 sticky top-10">
              <div className="mb-8">
                <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-5">
                  Formulario de contratación
                </span>

                <h2 className="text-3xl font-bold text-zinc-900 mb-3">
                  Completa tu información
                </h2>

                <p className="text-zinc-600 leading-7">
                  Ingresa los datos previamente acordados con tu asesor para agregar la estrategia personalizada al carrito.
                </p>
              </div>

              <div className="space-y-6">
                {/* QUOTE ID */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    ID de cotización
                  </label>

                  <input
                    type="text"
                    value={quoteId}
                    onChange={(e) => setQuoteId(e.target.value)}
                    placeholder="Ejemplo: EXC-2048"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                {/* STORE NAME */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Nombre de tienda online
                  </label>

                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="Ejemplo: Mi Tienda Store"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  />
                </div>

                {/* AMOUNT */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Monto a pagar
                  </label>

                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">
                      $
                    </span>

                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 pl-10 pr-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                    />
                  </div>
                </div>

                {/* IVA */}
                <div className="rounded-2xl bg-amber-50 border border-amber-200 px-5 py-4">
                  <p className="text-sm text-amber-800 font-medium">
                    El IVA será sumado al monto final durante el proceso de pago.
                  </p>
                </div>

                {/* SUMMARY */}
                <div className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-600 p-6 text-white shadow-[0_15px_40px_rgba(34,197,94,0.35)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">
                      Total estimado
                    </span>

                    <span className="text-4xl font-bold">
                      ${amount || "0"}
                    </span>
                  </div>

                  <p className="text-sm text-white/80 leading-6">
                    El servicio será agregado directamente al carrito para continuar con el proceso de contratación.
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleAddToCart}
                  disabled={alreadyAdded}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-zinc-900 hover:bg-black text-white px-6 py-5 font-semibold transition-all shadow-xl hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />

                  {alreadyAdded
                    ? "Ya agregado al carrito"
                    : "Agregar al carrito"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}