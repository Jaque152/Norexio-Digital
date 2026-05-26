"use client";

import { useMemo, useState } from "react";

import { Plan, plans } from "@/data/products";
import { useCart } from "@/context/CartContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

import {
  ArrowRight,
  Filter,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import PlanModal from "@/components/PlanModal";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart } = useCart();

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(plans.map((plan) => plan.category))
    );

    return [
      {
        id: "all",
        name: "Todos",
      },
      ...uniqueCategories.map((category) => ({
        id: category,
        name:
          category === "express"
            ? "Servicios Express"
            : category === "advanced"
              ? "Implementaciones Avanzadas"
              : category === "digital"
                ? "Crecimiento Digital"
                : category,
      })),
    ];
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? plans
      : plans.filter((plan) => plan.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Cart />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 pt-40 pb-24 px-6 lg:px-12">
        {/* Decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[320px] w-[320px] rounded-full bg-green-100 blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-100 blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
              <Sparkles className="w-4 h-4" />
              Soluciones ecommerce
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-none mb-8">
              Servicios diseñados para hacer crecer tu tienda online.
            </h1>

            <p className="text-lg md:text-xl leading-8 text-zinc-600 max-w-3xl">
              Estrategias, optimización y soluciones especializadas para
              ecommerce enfocadas en conversión, automatización y crecimiento
              digital.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS + PRODUCTS */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            {categories.map((category) => {
              const active = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${active
                    ? "bg-green-600 text-white shadow-lg shadow-green-100"
                    : "border border-green-100 bg-white text-zinc-700 hover:bg-green-50"
                    }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const categoryName =
                categories.find((c) => c.id === product.category)?.name ||
                product.category;

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-[36px] border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPlan(product);
                        setIsModalOpen(true);
                      }}
                      className="h-64 w-full text-left"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-64 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  </div>

                  <span className="mt-10 ml-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-green-700 border border-green-100 shadow-sm">
                    {categoryName}
                  </span>

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black tracking-tight text-zinc-900 leading-tight mb-4">
                      {product.title}
                    </h3>

                    {product.description && (
                      <p className="text-zinc-600 leading-7 mb-5">
                        {product.description}
                      </p>
                    )}

                    {/* FEATURES */}
                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {product.features
                          .slice(0, 3)
                          .map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-zinc-600"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                      </ul>
                    )}

                    {/* FOOTER */}
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-black text-green-700">
                          {formatPrice(product.price)}
                        </p>

                        <p className="text-sm text-zinc-400 mt-1">
                          IVA no incluido
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EMPTY */}
          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <Filter className="h-10 w-10 text-green-600" />
              </div>

              <h3 className="text-2xl font-black text-zinc-900 mb-3">
                No hay servicios disponibles
              </h3>

              <p className="max-w-md text-zinc-500 leading-7">
                Actualmente no existen soluciones dentro de esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[40px] border border-green-100 bg-white p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
                  Estrategia personalizada
                </span>

                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-6">
                  ¿Necesitas una solución personalizada?
                </h2>

                <p className="text-lg leading-8 text-zinc-600">
                  Podemos analizar tu ecommerce y ayudarte a construir una
                  estrategia enfocada en crecimiento, automatización y ventas.
                </p>
              </div>

              <Link href={"/solicitar-diagnostico"}>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-8 py-5 text-base font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
                  Solicitar estrategia
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PlanModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}