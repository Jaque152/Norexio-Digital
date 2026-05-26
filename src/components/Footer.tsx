"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300 mb-6">
              <ShieldCheck className="w-4 h-4" />

              {t("badge")}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-2xl text-zinc-400 leading-8 text-lg">
              {t("description")}
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 mt-10">
              <Image
                src="/cards.png"
                alt={t("cardsAlt")}
                width={150}
                height={30}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-16">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/40 border border-white/10 rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  {t("contactBadge")}
                </span>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-500 mb-1">
                      {t("phoneLabel")}
                    </p>

                    <a
                      href="tel:+525522301576"
                      className="text-lg font-bold text-white hover:text-emerald-300 transition-colors"
                    >
                      +52 55 2230 1576
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-500 mb-1">
                      {t("emailLabel")}
                    </p>

                    <a
                      href="mailto:webmaster@norexiodigital.com"
                      className="text-lg font-bold text-white hover:text-emerald-300 transition-colors break-all"
                    >
                      webmaster@norexiodigital.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-500 mb-1">
                      {t("addressLabel")}
                    </p>

                    <p className="text-zinc-400 leading-7">
                      {t("addressLine1")}
                      <br />
                      {t("addressLine2")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 text-white font-semibold shadow-[0_10px_25px_rgba(16,185,129,0.25)] transition-all hover:scale-[1.02]"
                >
                  {t("cta")}

                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-500">
              {t("copyright")}
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/legal/terms-conditions"
                className="text-sm font-medium text-zinc-500 hover:text-emerald-300 transition-colors"
              >
                {t("terms")}
              </Link>

              <Link
                href="/legal/privacy"
                className="text-sm font-medium text-zinc-500 hover:text-emerald-300 transition-colors"
              >
                {t("privacy")}
              </Link>

              <Link
                href="/legal/cancellation"
                className="text-sm font-medium text-zinc-500 hover:text-emerald-300 transition-colors"
              >
                {t("refunds")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}