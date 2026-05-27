"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ShoppingBag,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-emerald-100">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-32 h-[420px] w-[420px] rounded-full bg-green-200 blur-3xl opacity-40" />

        <div className="absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full bg-emerald-200 blur-3xl opacity-40" />

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white opacity-60 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #166534 1px, transparent 1px), linear-gradient(to bottom, #166534 1px, transparent 1px)",
            backgroundSize: "60px 180px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-28">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm mb-8">
              <Sparkles className="w-4 h-4 text-green-700" />

              <span className="text-sm font-semibold text-green-700">
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.05]">
              {t("title")}
            </h1>

            <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent leading-[1.05]">
              {t("titleHighlight")}
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-9 text-zinc-600">
              {t("description")}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative rounded-[40px] border border-white/60 bg-white/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    {t("card.badge")}
                  </span>

                  <h3 className="mt-4 text-3xl font-black text-zinc-900">
                    {t("card.title")}
                  </h3>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-5">
                <div className="rounded-3xl bg-green-50 p-5 border border-green-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-zinc-700">
                      {t("metrics.campaigns.label")}
                    </span>

                    <span className="text-sm font-bold text-green-700">
                      {t("metrics.campaigns.value")}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-green-100 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                  </div>
                </div>

                <div className="rounded-3xl bg-emerald-50 p-5 border border-emerald-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-zinc-700">
                      {t("metrics.conversion.label")}
                    </span>

                    <span className="text-sm font-bold text-emerald-700">
                      {t("metrics.conversion.value")}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-emerald-100 overflow-hidden">
                    <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-emerald-500 to-lime-500" />
                  </div>
                </div>

                <div className="rounded-3xl bg-lime-50 p-5 border border-lime-100">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="w-6 h-6 text-lime-700" />

                    <p className="text-sm leading-7 text-zinc-700">
                      {t("metrics.strategy")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}