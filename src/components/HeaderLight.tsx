"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeaderLight() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className=" top-0 z-50 py-4 px-6 lg:px-12 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/3837496165/3077512124.png"
            alt="ExpertCommerce"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#diagnostico"
              className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium"
            >
              Solicitar Diagnóstico
            </Link>
          </li>
          <li>
            <Link
              href="/tienda"
              className="text-orange font-semibold text-sm"
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium"
            >
              Contacto
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-dark hover:text-orange transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button & Cart */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-dark hover:text-orange transition-colors duration-300"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            className="text-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <Link
                  href="/"
                  className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#diagnostico"
                  className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Diagnóstico
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda"
                  className="text-orange font-semibold text-sm block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-dark hover:text-orange transition-colors duration-300 text-sm font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
