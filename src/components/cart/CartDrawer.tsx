'use client';

import { useCart } from '@/hooks/use-cart';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItemComponent } from './CartItem';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, total } = useCart();
  const locale = useLocale();
  const isEs = locale === 'es';

  if (!isOpen) return null;

  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay sobrio */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={() => setIsOpen(false)} 
      />
      
      {/* Panel lateral: Light Theme Clean */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col border-l border-stone-200">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <ShoppingBag className="text-emerald-600 w-5 h-5" />
            </div>
            {isEs ? 'Tu Carrito' : 'Your Cart'}
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors p-2 hover:bg-stone-50 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hidden bg-stone-50/50">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 shadow-inner">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <p className="text-stone-500 font-medium text-lg">
                {isEs ? 'Aún no has seleccionado ninguna estrategia.' : 'You haven\'t selected any strategy yet.'}
              </p>
            </div>
          ) : (
            items.map((item) => <CartItemComponent key={item.id} item={item} />)
          )}
        </div>

        {/* Footer del Drawer */}
        {items.length > 0 && (
          <div className="p-8 border-t border-stone-200 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-end mb-8 font-sans">
              <span className="text-stone-500 text-sm font-bold uppercase tracking-widest">
                {isEs ? 'Total de Inversión' : 'Total Investment'}
              </span>
              <div className="text-right">
                  <span className="text-3xl font-black text-stone-900 block tracking-tight">
                    {formatPrice(total * 1.16)}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-tighter">
                    {isEs ? 'Subtotal + 16% de IVA' : 'Subtotal + 16% VAT'}
                  </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              {/* BOTÓN VER CARRITO (Secundario) */}
              <Button asChild className="w-full h-14 rounded-xl font-bold border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-all p-0 shadow-sm">
                <Link 
                  href={`/${locale}/cart`} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full h-full"
                >
                  {isEs ? 'Ver carrito completo' : 'View full cart'}
                </Link>
              </Button>

              {/* BOTÓN CHECKOUT (Primario) */}
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 rounded-xl shadow-lg shadow-emerald-600/20 transition-all p-0 group border-none">
                <Link 
                  href={`/${locale}/checkout`} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full h-full font-bold text-lg"
                >
                  {isEs ? 'Continuar al Checkout' : 'Proceed to Checkout'} 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}