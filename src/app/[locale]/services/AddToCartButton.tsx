'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';

export function AddToCartButton({ planId }: { planId: string }) {
  // CORRECCIÓN: Traemos setIsOpen para mostrar el carrito al añadir
  const { addToCart, setIsOpen } = useCart();
  const [isPending, setIsPending] = useState(false);
  const locale = useLocale();
  const isEs = locale === 'es';

  const handleAdd = async () => {
    try {
      setIsPending(true);
      await addToCart(planId);
      setIsOpen(true); // Abre el drawer automáticamente para dar feedback al usuario
    } catch (error) {
      console.error("Falló la acción de añadir al carrito:", error);
      alert(isEs ? "Ocurrió un error al añadir al carrito." : "An error occurred adding to the cart.");
    } finally {
      // CORRECCIÓN: Ensures the spinner always stops, even if it fails
      setIsPending(false); 
    }
  };

  return (
    <Button 
      onClick={handleAdd} 
      disabled={isPending}
      className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-6 rounded-xl text-sm font-bold shadow-sm hover:shadow-md hover:shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 border-none"
    >
      {isPending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <ShoppingCart className="w-4 h-4" />
      )}
      {isEs ? 'Añadir al carrito' : 'Add to cart'}
    </Button>
  );
}