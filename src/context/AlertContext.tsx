"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import {
  X,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

export type AlertType = "error" | "success" | "warning" | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
  autoClose?: boolean;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

const typeStyles = {
  success: {
    accent: "from-emerald-500 to-green-600",
    glow: "shadow-emerald-200/50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    border: "border-emerald-100",
    button:
      "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700",
    defaultIcon: <CheckCircle2 className="h-7 w-7" />,
  },
  error: {
    accent: "from-red-500 to-rose-600",
    glow: "shadow-red-200/50",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    border: "border-red-100",
    button:
      "bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700",
    defaultIcon: <AlertCircle className="h-7 w-7" />,
  },
  warning: {
    accent: "from-amber-400 to-orange-500",
    glow: "shadow-amber-200/50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    border: "border-amber-100",
    button:
      "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600",
    defaultIcon: <AlertTriangle className="h-7 w-7" />,
  },
  info: {
    accent: "from-sky-500 to-cyan-600",
    glow: "shadow-sky-200/50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    border: "border-sky-100",
    button:
      "bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700",
    defaultIcon: <Info className="h-7 w-7" />,
  },
} as const;

export function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState<AlertOptions | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const hideAlert = useCallback(() => {
    setIsVisible(false);

    const currentOnClose = options?.onClose;

    window.setTimeout(() => {
      setIsOpen(false);
      setOptions(null);
      currentOnClose?.();
    }, 250);
  }, [options]);

  const showAlert = useCallback((opts: AlertOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !options?.autoClose) return;

    const timeout = window.setTimeout(() => {
      hideAlert();
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, [isOpen, options, hideAlert]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") hideAlert();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hideAlert]);

  const type = options?.type || "info";
  const styles = typeStyles[type];

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      {mounted && isOpen && options
        ? createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
              {/* BACKDROP */}
              <button
                type="button"
                aria-label="Cerrar alerta"
                onClick={hideAlert}
                className={`absolute inset-0 bg-white/70 backdrop-blur-xl transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* MODAL */}
              <div
                role="dialog"
                aria-modal="true"
                className={`relative w-8/12 max-w-lg transform overflow-hidden rounded-[2.5rem] border bg-white shadow-[0_30px_100px_rgba(16,185,129,0.18)] transition-all duration-300 ${
                  styles.border
                } ${
                  styles.glow
                } ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-6 scale-[0.96] opacity-0"
                }`}
              >
                {/* TOP GRADIENT */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${styles.accent}`}
                />

                {/* GLOW */}
                <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-green-100 blur-3xl opacity-40" />

                {/* CLOSE */}
                <button
                  type="button"
                  onClick={hideAlert}
                  className="absolute right-5 left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-100 bg-white/80 text-zinc-500 backdrop-blur transition-all hover:bg-zinc-100 hover:text-zinc-800"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative z-10 p-8 sm:p-10">
                  {/* ICON */}
                  <div className="mb-8 flex justify-center">
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-[2rem] ${styles.iconBg} ${styles.iconColor}`}
                    >
                      <div className="absolute inset-0 rounded-[2rem] bg-white/40" />

                      <div className="relative">
                        {options.icon || styles.defaultIcon}
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  {options.image && (
                    <div className="relative mb-8 aspect-video overflow-hidden rounded-[2rem] border border-green-100">
                      <Image
                        src={options.image}
                        alt={options.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="text-center">
                    <h3 className="text-3xl font-black tracking-tight text-zinc-900">
                      {options.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-md text-base leading-8 text-zinc-600">
                      {options.message}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <button
                      type="button"
                      onClick={hideAlert}
                      className={`flex h-14 w-full items-center justify-center rounded-2xl px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] shadow-xl ${styles.button}`}
                    >
                      {options.confirmText || "Continuar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert debe ser usado dentro de AlertProvider");
  }

  return context;
};