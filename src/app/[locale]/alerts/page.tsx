"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useAlert } from "@/context/AlertContext";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  Sparkles,
  TriangleAlert,
  Zap,
} from "lucide-react";

export default function AlertsDemoPage() {
  const { showAlert } = useAlert();

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-100 min-h-screen py-28 px-6 lg:px-12">
        {/* BG */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-green-200 blur-3xl opacity-30" />

          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-200 blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* HERO */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
              <Zap className="w-4 h-4" />
              Warp Zone
            </span>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6">
              Alert System
            </h1>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-zinc-600">
              Centro de pruebas visuales para validar estados, colores,
              transiciones y experiencia del sistema de alertas.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* SUCCESS */}
            <button
              onClick={() =>
                showAlert({
                  type: "success",
                  title: "Pago procesado",
                  message:
                    "Tu estrategia ecommerce fue agregada correctamente al carrito.",
                  confirmText: "Perfecto",
                })
              }
              className="group rounded-[2rem] border border-emerald-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(16,185,129,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>

              <h2 className="text-2xl font-black text-zinc-900 mb-3">
                Success Alert
              </h2>

              <p className="text-zinc-600 leading-7">
                Alerta para operaciones exitosas y acciones completadas.
              </p>
            </button>

            {/* ERROR */}
            <button
              onClick={() =>
                showAlert({
                  type: "error",
                  title: "Error de conexión",
                  message:
                    "No fue posible procesar la solicitud. Intenta nuevamente.",
                  confirmText: "Entendido",
                })
              }
              className="group rounded-[2rem] border border-red-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(239,68,68,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-red-100">
                <AlertCircle className="w-8 h-8 text-red-700" />
              </div>

              <h2 className="text-2xl font-black text-zinc-900 mb-3">
                Error Alert
              </h2>

              <p className="text-zinc-600 leading-7">
                Alerta para errores críticos o validaciones fallidas.
              </p>
            </button>

            {/* WARNING */}
            <button
              onClick={() =>
                showAlert({
                  type: "warning",
                  title: "Atención requerida",
                  message:
                    "Algunos campos del formulario todavía necesitan revisión.",
                  confirmText: "Revisar",
                })
              }
              className="group rounded-[2rem] border border-amber-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(245,158,11,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100">
                <TriangleAlert className="w-8 h-8 text-amber-700" />
              </div>

              <h2 className="text-2xl font-black text-zinc-900 mb-3">
                Warning Alert
              </h2>

              <p className="text-zinc-600 leading-7">
                Alerta preventiva para advertencias y confirmaciones.
              </p>
            </button>

            {/* INFO */}
            <button
              onClick={() =>
                showAlert({
                  type: "info",
                  title: "Nueva actualización",
                  message:
                    "La plataforma ecommerce recibió nuevas mejoras visuales.",
                  confirmText: "Continuar",
                  autoClose: false,
                })
              }
              className="group rounded-[2rem] border border-sky-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(14,165,233,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-100">
                <Info className="w-8 h-8 text-sky-700" />
              </div>

              <h2 className="text-2xl font-black text-zinc-900 mb-3">
                Info Alert
              </h2>

              <p className="text-zinc-600 leading-7">
                Alerta informativa para notificaciones generales.
              </p>
            </button>
          </div>

          {/* EXTRA */}
          <div className="mt-12">
            <button
              onClick={() =>
                showAlert({
                  type: "success",
                  title: "Modo Warp activado",
                  message:
                    "El sistema de alertas está funcionando correctamente con la nueva estética expressive.",
                  confirmText: "Increíble",
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
                })
              }
              className="w-full rounded-[2.5rem] border border-green-100 bg-gradient-to-br from-white via-green-50 to-emerald-100 p-10 text-left shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-600 text-white shadow-xl shadow-green-200">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div>
                  <h2 className="text-3xl font-black text-zinc-900">
                    Warp Zone Demo
                  </h2>

                  <p className="text-zinc-600">
                    Demo avanzada con imagen integrada
                  </p>
                </div>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-zinc-700">
                Prueba completa del modal con imagen, gradientes, glow effects,
                backdrop blur y animaciones modernas alineadas al diseño general
                del ecommerce.
              </p>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}