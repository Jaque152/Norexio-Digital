"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTABanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-6 lg:px-12">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-0 h-[320px] w-[320px] rounded-full bg-green-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-emerald-100 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-[40px] border border-green-100 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
                <Sparkles className="w-4 h-4" />
                {t("badge")}
              </span>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-6">
                {t("title")}
              </h2>

              <p className="text-lg leading-8 text-zinc-600 mb-10 max-w-xl">
                {t("description")}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/estrategia-personalizada"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
                >
                  {t("primaryButton")}

                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/tienda"
                  className="inline-flex items-center justify-center rounded-2xl border border-green-200 bg-white px-8 py-4 text-zinc-900 font-semibold transition-all duration-300 hover:bg-green-50"
                >
                  {t("secondaryButton")}
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative min-h-[320px] bg-gradient-to-br from-green-100 via-emerald-50 to-white flex items-center justify-center overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute h-[420px] w-[420px] rounded-full border border-green-200" />
              <div className="absolute h-[300px] w-[300px] rounded-full border border-green-200" />
              <div className="absolute h-[180px] w-[180px] rounded-full border border-green-200" />

              {/* Center Card */}
              <div className="relative z-10 rounded-[32px] border border-green-100 bg-white px-10 py-8 shadow-xl">
                <div className="text-center">
                  <p className="text-sm font-medium text-zinc-500 mb-2">
                    {t("stats.label")}
                  </p>

                  <h3 className="text-5xl font-black text-green-700 mb-3">
                    +38%
                  </h3>

                  <p className="text-zinc-600 leading-7 max-w-[220px]">
                    {t("stats.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}