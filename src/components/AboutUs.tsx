"use client";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-6 lg:px-12">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-green-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-emerald-100 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-green-200 to-emerald-100 blur-2xl opacity-40" />

            <div className="relative overflow-hidden rounded-[40px] border border-green-100 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <img
                src="https://ext.same-assets.com/3837496165/4224334191.jpeg"
                alt="Equipo ExpertCommerce"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700 mb-6">
              ¿Quiénes Somos?
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-8">
              El equipo detrás del crecimiento digital.
            </h2>

            <p className="text-lg leading-8 text-zinc-700 mb-6">
              Creemos que una tienda online debe ser más que un catálogo de
              productos: debe convertirse en una experiencia que conecte con los
              clientes y genere ventas reales.
            </p>

            <p className="text-zinc-600 leading-8">
              Nos dedicamos a analizar, optimizar y fortalecer ecommerce para
              que cada negocio tenga una estructura digital preparada para
              crecer, mejorar su rendimiento y ofrecer una experiencia de compra
              más efectiva.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}