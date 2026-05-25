"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/types';

export default function CartPage() {
  const { items, total, removeFromCart } = useCart();
  const locale = useLocale();
  const isEs = locale === 'es';

  const formatPrice = (price: number) => 
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-24 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto p-12">
          <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-stone-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-stone-900">
            {isEs ? 'Tu carrito está vacío' : 'Your cart is empty'}
          </h1>
          <Button asChild className="w-full bg-emerald-600 text-white h-14 rounded-xl font-bold">
            <Link href={`/${locale}/services`}>
              {isEs ? 'Explorar Catálogo' : 'Explore Catalog'}
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 text-stone-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12">{isEs ? 'Tu Carrito' : 'Your Cart'}</h1>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200">
              <div className="divide-y divide-stone-100">
                {items.map((item: CartItem) => {
                  const itemPrice = item.custom_price ?? Number(item.nx_plans?.price ?? 0);
                  return (
                    <div key={item.id} className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.nx_plans?.title || 'Estrategia Personalizada'}</h3>
                        {item.quote_id && <span className="text-xs text-emerald-600 font-bold uppercase">Ref: {item.quote_id}</span>}
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-medium">Cant: {item.quantity}</span>
                        <span className="font-black text-lg">{formatPrice(itemPrice * item.quantity)}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-stone-400 hover:text-red-500">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white p-8 border border-stone-200 rounded-3xl shadow-sm sticky top-32">
            <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>
            <div className="space-y-4 mb-6 font-medium">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
              <div className="flex justify-between"><span>IVA (16%)</span><span>{formatPrice(total * 0.16)}</span></div>
              <div className="text-xl font-black pt-4 border-t flex justify-between">
                <span>Total</span><span>{formatPrice(total * 1.16)}</span>
              </div>
            </div>
            <Button asChild className="w-full bg-emerald-600 text-white h-14 rounded-xl font-bold">
              <Link href={`/${locale}/checkout`}>
                {isEs ? 'Proceder al Pago' : 'Proceed to Checkout'} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}