'use client';

import { useTransition } from 'react';
import { CartItem } from '@/types';
import { updateQuantity } from '@/actions/cart'; 
import { useCart } from '@/hooks/use-cart';
import { Minus, Plus, Trash2, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';

export function CartItemComponent({ item }: { item: CartItem }) {
  const { refreshCart, removeFromCart } = useCart();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const isEs = locale === 'es';

  const price = item.custom_price !== null ? item.custom_price : (item.nx_plans?.price || 0);  
  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  const handleUpdateQty = (newQty: number) => {
    if (newQty < 1) return;
    startTransition(async () => {
      await updateQuantity(item.id, newQty);
      await refreshCart(); 
    });
  };

  const handleRemove = () => {
    startTransition(async () => {
      await removeFromCart(item.id);
    });
  };

  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white relative overflow-hidden group transition-all hover:border-emerald-300 hover:shadow-lg shadow-sm">
      
      {isPending && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between">
        <div className="pr-8">
          <h4 className="font-bold text-lg text-stone-900 leading-tight tracking-tight group-hover:text-emerald-700 transition-colors">
            {item.nx_plans?.title || (isEs ? 'Estrategia Personalizada' : 'Custom Strategy')}
          </h4>
          
          {item.quote_id && (
            <p className="text-xs text-emerald-600 font-bold mt-2 uppercase tracking-wider bg-emerald-50 inline-block px-2 py-1 rounded-md">
              {isEs ? 'Folio:' : 'Ref:'} {item.quote_id}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3 bg-stone-50 rounded-full p-1 border border-stone-200">
            <button
              onClick={() => handleUpdateQty(item.quantity - 1)}
              disabled={item.quantity <= 1 || isPending}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm text-stone-500 hover:text-stone-900 transition-all disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <Minus className="w-3 h-3" />
            </button>
            
            <span className="font-bold text-sm text-stone-900 w-4 text-center">
              {item.quantity}
            </span>
            
            <button
              onClick={() => handleUpdateQty(item.quantity + 1)}
              disabled={isPending}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm text-stone-500 hover:text-stone-900 transition-all"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <div className="text-right">
            <div className="text-lg font-black text-stone-900">
              {formatPrice(price * item.quantity)}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleRemove}
        disabled={isPending}
        title={isEs ? "Eliminar" : "Remove"}
        className="absolute top-4 right-4 p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}