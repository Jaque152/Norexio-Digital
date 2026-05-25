"use client";

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { AddToCartButton } from './services/AddToCartButton';
import { ArrowUpRight, CheckCircle2, XCircle, BarChart3, ShoppingBag, Loader2 } from 'lucide-react';
import { Plan } from '@/types'; 

export default function HomePage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const supabase = createClient();

  const [planes, setPlanes] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatPrice = (price: number) => 
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  useEffect(() => {
    const fetchPlanes = async () => {
      const { data, error } = await supabase
        .from('nx_plans')
        .select('*')
        .eq('is_active', true)
        .order('price', { ascending: true });
      
      if (data) setPlanes(data as Plan[]);
      setIsLoading(false);
    };

    fetchPlanes();
  }, [supabase]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-stone-50">
      <section id="nosotros" className="px-6 max-w-7xl mx-auto mb-32 pt-10">
        <div className="text-center mb-16">
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Soluciones Norexio
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-200 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-8">
              Barreras para el <br/><span className="text-emerald-600">Crecimiento Digital</span>
            </h1>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-1" />
                <span className="text-lg text-stone-600 font-medium">¿Tu tienda online tiene visitas pero no vende?</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-1" />
                <span className="text-lg text-stone-600 font-medium">¿Tu publicidad no genera retorno?</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-1" />
                <span className="text-lg text-stone-600 font-medium">¿Tu ecommerce no aparece en Google?</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center h-full">
            <p className="text-xl text-stone-600 font-medium leading-relaxed mb-10">
              Nos especializamos en estrategias diseñadas <strong className="text-emerald-600">exclusivamente para tiendas online.</strong>
            </p>
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Beneficios claros:</h2>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
              {["Incremento de conversiones", "Más tráfico calificado", "Optimización de campañas", "Automatización de ventas", "Escalabilidad del ecommerce"].map((beneficio, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-stone-700 font-semibold">{beneficio}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link href="#soluciones" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30 border-none">
                Ver Soluciones <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">Catálogo de <span className="text-emerald-600">Servicios</span></h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center py-20"><Loader2 className="w-12 h-12 animate-spin text-emerald-600" /></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planes.map((plan) => (
              <div key={plan.id} className="bg-white p-8 rounded-3xl border border-stone-200 flex flex-col hover:border-emerald-300 transition-all shadow-sm">
                <div className="mb-6 flex justify-between items-start">
                   <ShoppingBag className="text-emerald-600 w-8 h-8"/>
                   <span className="text-xl font-black text-stone-900">{formatPrice(plan.price)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">{plan.title}</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => <li key={i} className="text-stone-600 text-sm flex gap-2"><BarChart3 className="w-4 h-4 text-emerald-500" /> {f}</li>)}
                </ul>
                <AddToCartButton planId={plan.id} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}