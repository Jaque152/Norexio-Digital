"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingCart, LayoutGrid } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

export function Navigation() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { setIsOpen, items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const isEs = locale === 'es';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale; 
    router.push(`${segments.join('/')}${window.location.hash}`);
  };

  const navLinks = [
    { name: isEs ? 'Nosotros' : 'About', href: `/${locale}/#nosotros` },
    { name: isEs ? 'Soluciones' : 'Solutions', href: `/${locale}/#soluciones` },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border border-stone-200 shadow-sm' : 'bg-transparent border border-transparent'}`}>
          
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-stone-900 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-emerald-600" />
            NOREXIO <span className="text-emerald-600 font-light">DIGITAL</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-stone-600 hover:text-emerald-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-2 border-r border-stone-200 pr-5">
              <button onClick={() => switchLocale('es')} className={`text-xs font-bold px-2 py-1 rounded ${locale === 'es' ? 'bg-emerald-50 text-emerald-600' : 'text-stone-500 hover:text-stone-900'}`}>ES</button>
              <button onClick={() => switchLocale('en')} className={`text-xs font-bold px-2 py-1 rounded ${locale === 'en' ? 'bg-emerald-50 text-emerald-600' : 'text-stone-500 hover:text-stone-900'}`}>EN</button>
            </div>

            <button onClick={() => setIsOpen(true)} className="relative group p-2 bg-slate-50 rounded-full hover:bg-emerald-50 transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-700 group-hover:text-emerald-600" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}