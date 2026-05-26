"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { useContact } from "@/hooks/useContact";
import { useAlert } from "@/context/AlertContext";

export default function ContactForm() {
  const t = useTranslations("contactForm");

  const { sendContactForm, isLoading } = useContact();
  const { showAlert } = useAlert();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tienda: "",
    sitio: "",
    mensaje: "",
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

    const response = await sendContactForm({
      ...formData,
      asunto: t("emailSubject", {
        store: formData.tienda || "Norexio Digital",
      }),
    });

    if (response.success) {
      showAlert({
        type: "success",
        title: t("alerts.successTitle"),
        message: t("alerts.successMessage"),
      });

      resetForm();
    } else {
      showAlert({
        type: "error",
        title: t("alerts.errorTitle"),
        message:
          response.error || t("alerts.errorMessage"),
      });
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 lg:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT INFO */}
          <div className="lg:top-24">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              {t("badge")}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6 font-syne">
              {t("title")}
            </h2>

            <p className="text-zinc-600 text-lg leading-8 mb-6">
              {t("description1")}
            </p>

            <p className="text-zinc-600 text-lg leading-8 mb-10">
              {t("description2")}
            </p>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-green-100 bg-green-50/60">
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                  <MapPin size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    {t("info.address.title")}
                  </h4>

                  <p className="text-zinc-600 leading-7">
                    {t("info.address.line1")}
                    <br />
                    {t("info.address.line2")}
                    <br />
                    {t("info.address.line3")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-green-100 bg-green-50/60">
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                  <Mail size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    {t("info.email.title")}
                  </h4>

                  <a
                    href="mailto:webmaster@norexiodigital.com"
                    className="text-zinc-600 hover:text-green-700 transition-colors"
                  >
                    webmaster@norexiodigital.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-green-100 bg-green-50/60">
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                  <Phone size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    {t("info.phone.title")}
                  </h4>

                  <a
                    href="tel:+525522301576"
                    className="text-zinc-600 hover:text-green-700 transition-colors"
                  >
                    +52 55 2230 1576
                  </a>
                </div>
              </div>
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
                {/* Nombre */}
                <div>
                  <label className="block text-zinc-700 mb-2 text-sm font-medium">
                    {t("fields.nombre")} *
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

                {/* Email / Tel */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-700 mb-2 text-sm font-medium">
                      {t("fields.email")} *
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
                      {t("fields.telefono")} *
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

                {/* Tienda / Sitio */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-700 mb-2 text-sm font-medium">
                      {t("fields.tienda")} *
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
                      {t("fields.sitio")} *
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

                {/* Mensaje */}
                <div>
                  <label className="block text-zinc-700 mb-2 text-sm font-medium">
                    {t("fields.mensaje")} *
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl transition-all shadow-xl shadow-green-200 hover:scale-[1.01]"
                >
                  {isLoading
                    ? t("form.sending")
                    : t("form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}