"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Link } from "@/i18n/routing";

import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from "lucide-react";

const IVA_RATE = 0.16;

export default function Cart() {
  const t = useTranslations("cartDrawer");

  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    totalItems,
    totalPrice,
  } = useCart();

  const iva = useMemo(
    () => totalPrice * IVA_RATE,
    [totalPrice]
  );

  const finalTotal = useMemo(
    () => totalPrice + iva,
    [totalPrice, iva]
  );

  if (!isCartOpen) return null;

  return (
    <>
      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-xl bg-white border-l border-emerald-100 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#f8fffb] border-b border-emerald-100 px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-3xl bg-emerald-100 flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-emerald-700" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {t("selectedServices")}
                </p>

                <h2 className="text-2xl font-bold text-gray-900">
                  {t("cart")} ({totalItems})
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 hover:bg-emerald-50 transition-colors flex items-center justify-center"
              aria-label={t("close")}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Empty */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-24 h-24 rounded-[2rem] bg-emerald-100 flex items-center justify-center mb-8">
              <ShoppingBag className="w-12 h-12 text-emerald-700" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {t("emptyTitle")}
            </h3>

            <p className="text-gray-500 leading-7 max-w-sm mb-8">
              {t("emptyDescription")}
            </p>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="h-14 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
            >
              {t("exploreServices")}
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-emerald-50 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 mb-3">
                              {t("ecommerceService")}
                            </p>

                            <div className="flex items-end gap-2">
                              <span className="text-xl font-bold text-emerald-700">
                                {formatPrice(item.price)}
                              </span>

                              <span className="text-sm text-gray-400 mb-0.5">
                                {t("plusTax")}
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 transition-colors flex items-center justify-center flex-shrink-0"
                            aria-label={t("remove")}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center justify-between mt-5">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-10 h-10 rounded-xl border border-emerald-200 hover:bg-emerald-50 flex items-center justify-center transition-colors"
                              aria-label={t("decrease")}
                            >
                              <Minus className="w-4 h-4 text-emerald-700" />
                            </button>

                            <div className="w-10 text-center text-lg font-bold text-gray-900">
                              {item.quantity}
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-10 h-10 rounded-xl border border-emerald-200 hover:bg-emerald-50 flex items-center justify-center transition-colors"
                              aria-label={t("increase")}
                            >
                              <Plus className="w-4 h-4 text-emerald-700" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-gray-500">
                              {t("total")}
                            </p>

                            <p className="text-lg font-bold text-gray-900">
                              {formatPrice(
                                item.price * item.quantity
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-emerald-100 bg-white p-6">
              {/* Summary */}
              <div className="rounded-[2rem] bg-emerald-50 border border-emerald-100 p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>{t("subtotal")}</span>

                    <span className="font-semibold">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>{t("tax")}</span>

                    <span className="font-semibold">
                      {formatPrice(iva)}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-emerald-200 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      {t("finalTotal")}
                    </span>

                    <span className="text-3xl font-bold text-emerald-700">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link href="/cart">
                  <button
                    type="button"
                    className="w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-100"
                  >
                    {t("checkout")}

                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full h-14 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 text-gray-700 font-semibold transition-colors"
                >
                  {t("clearCart")}
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}