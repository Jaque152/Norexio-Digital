"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

import { useContact } from "@/hooks/useContact";

export default function DiagnosticPage() {
  const t = useTranslations("diagnostic");

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
      asunto: `${t("emailSubject")} - ${
        formData.tienda || "Norexio Digital"
      }`,
    });

    if (response.success) {
      setStatus({
        type: "success",
        message: t("successMessage"),
      });

      resetForm();
    } else {
      setStatus({
        type: "error",
        message:
          response.error || t("errorMessage"),
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
            <div>
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                {t("badge")}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6 font-syne">
                {t("title")}
              </h1>

              <p className="text-zinc-600 text-lg leading-8 mb-6">
                {t("description1")}
              </p>

              <p className="text-zinc-600 text-lg leading-8 mb-10">
                {t("description2")}
              </p>

              <div className="rounded-[32px] border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                  {t("includesTitle")}
                </h2>

                <ul className="space-y-4">
                  {[
                    t("includes.0"),
                    t("includes.1"),
                    t("includes.2"),
                    t("includes.3"),
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-700 leading-7"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-600 shrink-0" />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FORM */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-emerald-100/30 blur-3xl rounded-full" />

              <div className="relative bg-white border border-green-100 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-green-100/40">
                <div className="mb-8">
                  <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                    {t("form.badge")}
                  </span>

                  <h3 className="text-3xl font-bold text-zinc-900 font-syne mb-3">
                    {t("form.title")}
                  </h3>

                  <p className="text-zinc-600 leading-7">
                    {t("form.description")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-zinc-700 mb-2 text-sm font-medium">
                      {t("form.name")} *
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
                        {t("form.email")} *
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
                        {t("form.phone")} *
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
                        {t("form.store")} *
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
                        {t("form.website")} *
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
                      {t("form.message")} *
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
                      className={`rounded-2xl px-5 py-4 text-sm font-medium border ${
                        status.type === "success"
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
                    {isLoading
                      ? t("form.loading")
                      : t("form.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  );
}