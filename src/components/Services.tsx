"use client";

import { useTranslations } from "next-intl";

import {
  LineChart,
  Megaphone,
  Search,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      icon: TrendingUp,
      title: t("items.0"),
    },
    {
      icon: Megaphone,
      title: t("items.1"),
    },
    {
      icon: LineChart,
      title: t("items.2"),
    },
    {
      icon: Zap,
      title: t("items.3"),
    },
    {
      icon: Search,
      title: t("items.4"),
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-green-50 to-white py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
            {t("badge")}
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-emerald-100 transition-transform duration-300 group-hover:scale-105">
                <service.icon
                  className="w-8 h-8 text-green-700"
                  strokeWidth={1.7}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-8 text-zinc-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}