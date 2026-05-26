"use client";

import {
  LineChart,
  Phone,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Enfoque estratégico",
    description:
      "Cada ecommerce se analiza de forma personalizada para definir acciones alineadas a sus objetivos reales.",
  },
  {
    icon: LineChart,
    title: "Optimización orientada a resultados",
    description:
      "Mejoramos estructura, experiencia y conversión para aumentar el rendimiento de tu tienda online.",
  },
  {
    icon: ShoppingCart,
    title: "Especialización en ecommerce",
    description:
      "Trabajamos exclusivamente con comercio electrónico para desarrollar soluciones más precisas y efectivas.",
  },
  {
    icon: RefreshCw,
    title: "Visión de crecimiento digital",
    description:
      "Construimos estrategias preparadas para evolucionar, escalar y adaptarse al mercado digital.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
            ¿Por qué elegirnos?
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-6">
            Diseñamos estrategias enfocadas en crecimiento real.
          </h2>

          <p className="text-lg leading-8 text-zinc-600">
            Ayudamos a transformar tiendas online en estructuras digitales más
            eficientes, escalables y preparadas para aumentar ventas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] border border-green-100 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Decorative Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-100 blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

              {/* Icon */}
              <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100">
                <feature.icon
                  className="h-8 w-8 text-green-700"
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black tracking-tight text-zinc-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-zinc-600 leading-8">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}