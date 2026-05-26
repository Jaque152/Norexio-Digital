"use client";

import { useTranslations } from "next-intl";

const steps = [
  {
    number: "01",
    titleKey: "step1.title",
    descriptionKey: "step1.description",
  },
  {
    number: "02",
    titleKey: "step2.title",
    descriptionKey: "step2.description",
  },
  {
    number: "03",
    titleKey: "step3.title",
    descriptionKey: "step3.description",
  },
  {
    number: "04",
    titleKey: "step4.title",
    descriptionKey: "step4.description",
  },
];

export default function Process() {
  const t = useTranslations("process");

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
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

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-white to-green-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Big Number */}
              <div className="absolute top-5 right-6 text-7xl font-black text-green-100 select-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-green-100 shadow-sm">
                  <span className="text-lg font-black text-green-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-zinc-900 leading-tight mb-4">
                  {t(step.titleKey)}
                </h3>

                <p className="text-zinc-600 leading-7">
                  {t(step.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}