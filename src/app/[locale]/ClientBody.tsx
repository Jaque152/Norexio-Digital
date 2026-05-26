"use client";

import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import { LocaleProvider } from "@/context/LangContext";
import { AlertProvider } from "@/context/AlertContext";
import LangSwitcher from "@/components/LangSwitcher";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <LocaleProvider>
      <AlertProvider>
        <CartProvider>
          <LangSwitcher />
          <div className="antialiased">{children}</div>
        </CartProvider>
      </AlertProvider>
    </LocaleProvider>
  );
}
