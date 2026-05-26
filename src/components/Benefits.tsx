"use client";

import {
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

export default function Benefits() {
  const barriers = [
    "Tu tienda recibe visitas pero no genera ventas.",
    "Tus campañas consumen presupuesto sin retorno.",
    "Tu ecommerce no logra posicionarse correctamente.",
  ];

  const benefits = [
    "Mayor conversión",
    "Más tráfico calificado",
    "Optimización de campañas",
    "Automatización comercial",
    "Crecimiento sostenible",
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
              Soluciones Ecommerce
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-8">
              Detectamos lo que está frenando tu crecimiento digital.
            </h2>

            <div className="space-y-4">
              {barriers.map((barrier, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-3xl border border-red-100 bg-red-50 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <CircleAlert className="w-5 h-5 text-red-500" />
                  </div>

                  <p className="text-zinc-700 leading-7">
                    {barrier}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-600">
              Diseñamos estrategias enfocadas específicamente en
              ecommerce para ayudarte a vender más y operar mejor.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-green-100 bg-gradient-to-br from-white via-green-50 to-emerald-100 p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                Beneficios
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 mb-8">
              Resultados claros y medibles.
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl bg-white p-5 border border-green-100 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100">
                    <CheckCircle2 className="w-5 h-5 text-green-700" />
                  </div>

                  <span className="text-lg font-semibold text-zinc-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}