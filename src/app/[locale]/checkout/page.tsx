"use client";

import { useLocale } from 'next-intl';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { CheckCircle, Loader2, CreditCard, ShieldCheck } from "lucide-react";
import { processCheckout } from "@/actions/checkout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItem, CheckoutPayload } from "@/types";

export default function CheckoutContent() {
  const { items, total, } = useCart();
  const locale = useLocale();
  const isEs = locale === 'es';
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [contactInfo, setContactInfo] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [billingInfo, setBillingInfo] = useState({ pais: "México", direccion: "", localidad: "", estado: "", codigo_postal: "" });
  const [cardInfo, setCardInfo] = useState({ number: "", name: "", expiry: "", cvv: "" });

  useEffect(() => {
    const savedData = sessionStorage.getItem("nc_temp_contact");
    if (savedData) {
      const { firstName, lastName, email } = JSON.parse(savedData);
      setContactInfo(prev => ({ ...prev, firstName, lastName, email }));
      sessionStorage.removeItem("nc_temp_contact"); 
    }
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMsg("");
    
    const payload: CheckoutPayload = {
      locale, contactInfo, billingInfo, cardInfo, items, total  
    };
    
    const res = await processCheckout(payload);

    if (res.success) {
      setContactInfo({ firstName: "", lastName: "", email: "", phone: "" });
      setBillingInfo({ pais: "México", direccion: "", localidad: "", estado: "", codigo_postal: "" });
      setCardInfo({ number: "", name: "", expiry: "", cvv: "" });
      setShowSuccess(true);
      window.scrollTo(0, 0);
    } else {
      setErrorMsg(res.message || (isEs ? "Ocurrió un error al procesar el pago." : "An error occurred while processing the payment."));
      setIsProcessing(false);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) val = `${val.slice(0, 2)}/${val.slice(2)}`;
    setCardInfo({ ...cardInfo, expiry: val });
  };

  const inputClass = "h-14 bg-white border border-stone-200 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl px-5 text-stone-900 placeholder:text-stone-400 font-medium transition-all shadow-sm w-full outline-none";

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4 relative">
        <div className="max-w-lg w-full text-center bg-white border border-stone-100 rounded-[2rem] p-10 md:p-16 shadow-2xl relative z-10 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-stone-900 tracking-tight">
            {isEs ? '¡Estrategia Confirmada!' : 'Strategy Confirmed!'}
          </h1>
          <p className="text-stone-500 mb-10 text-lg font-medium">
            {isEs 
              ? 'Hemos enviado un recibo detallado a tu correo electrónico con los siguientes pasos.' 
              : 'We have sent a detailed receipt to your email with the next steps.'}
          </p>
          <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-14 rounded-xl transition-all shadow-lg shadow-emerald-600/20">
            <Link href={`/${locale}/`}>{isEs ? 'Volver al Inicio' : 'Back to Home'}</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 pt-32 pb-24 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-stone-900 tracking-tight">
          {isEs ? 'Finalizar compra' : 'Complete Purchase'}
        </h1>
        {errorMsg && <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-8 font-semibold text-center">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 border border-stone-200 rounded-3xl shadow-sm">
              <h2 className="text-xl font-extrabold mb-6 text-stone-900 tracking-tight">
                {isEs ? 'Detalles de facturación' : 'Billing Details'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <Input placeholder={isEs ? "Nombre *" : "First Name *"} required value={contactInfo.firstName} onChange={(e)=>setContactInfo({...contactInfo, firstName:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Apellidos *" : "Last Name *"} required value={contactInfo.lastName} onChange={(e)=>setContactInfo({...contactInfo, lastName:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Correo electrónico *" : "Email address *"} type="email" required value={contactInfo.email} onChange={(e)=>setContactInfo({...contactInfo, email:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Teléfono *" : "Phone number *"} type="tel" required value={contactInfo.phone} onChange={(e)=>setContactInfo({...contactInfo, phone:e.target.value})} className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input placeholder={isEs ? "País / Región *" : "Country / Region *"} required value={billingInfo.pais} disabled className={inputClass + " bg-stone-100 text-stone-500"} />
                <Input placeholder={isEs ? "Dirección de la calle *" : "Street address *"} required value={billingInfo.direccion} onChange={(e)=>setBillingInfo({...billingInfo, direccion:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Localidad / Ciudad *" : "City / Locality *"} required value={billingInfo.localidad} onChange={(e)=>setBillingInfo({...billingInfo, localidad:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Región / Estado *" : "State / Province *"} required value={billingInfo.estado} onChange={(e)=>setBillingInfo({...billingInfo, estado:e.target.value})} className={inputClass} />
                <Input placeholder={isEs ? "Código postal *" : "Postal / Zip code *"} required value={billingInfo.codigo_postal} onChange={(e)=>setBillingInfo({...billingInfo, codigo_postal:e.target.value})} className={inputClass} />
              </div>
            </div>

            {/* Tarjeta de Pago Limpia */}
            <div className="bg-white p-8 border border-stone-200 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none text-stone-900"><CreditCard className="w-48 h-48" /></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-6">
                  <img src="/logo-octano-2.png" alt="Octano" className="h-6 opacity-60 mix-blend-multiply" />
                </div>
                <div className="grid gap-5 max-w-md">
                  <Input placeholder={isEs ? "Número de tarjeta *" : "Card number *"} required maxLength={19} value={cardInfo.number} onChange={(e)=>setCardInfo({...cardInfo, number: e.target.value.replace(/\D/g, '')})} className={inputClass + " font-mono tracking-widest text-lg"} />
                  <Input placeholder={isEs ? "Nombre en la tarjeta *" : "Name on card *"} required value={cardInfo.name} onChange={(e)=>setCardInfo({...cardInfo, name: e.target.value.toUpperCase()})} className={inputClass} />
                  <div className="grid grid-cols-2 gap-5">
                    <Input placeholder="MM/AA *" required maxLength={5} value={cardInfo.expiry} onChange={handleExpiryChange} className={inputClass + " text-center"} />
                    <Input placeholder="CVV *" type="password" required maxLength={4} value={cardInfo.cvv} onChange={(e)=>setCardInfo({...cardInfo, cvv: e.target.value.replace(/\D/g, '')})} className={inputClass + " text-center tracking-widest"} />
                  </div>
                  <div className="mt-4 pt-4 border-t border-stone-100">
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-wide mt-3 flex items-center gap-2 bg-stone-50 p-3 rounded-lg border border-stone-100">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> 
                      {isEs ? 'Datos encriptados bajo protocolo AES-256.' : 'Data encrypted under AES-256 protocol.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="lg:col-span-4 bg-white p-8 border border-stone-200 rounded-3xl shadow-sm sticky top-32">
            <h2 className="text-xl font-extrabold mb-6 border-b border-stone-100 pb-4 tracking-tight text-stone-900">
              {isEs ? 'Tu pedido' : 'Your order'}
            </h2>
            <div className="space-y-4 mb-6">
              {items.map((item: CartItem, idx: number) => (
                <div key={idx} className="flex justify-between text-sm items-center font-medium">
                  <span className="text-stone-500">
                    {item.nx_plans?.title || (isEs ? 'Personalizado' : 'Custom')}
                    <span className="text-emerald-600 font-bold ml-2">x{item.quantity}</span>
                  </span>
                  <span className="font-bold text-stone-900">
                    {formatPrice((item.custom_price || item.nx_plans?.price || 0) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-100 pt-6 mb-8 font-sans">
              <div className="flex justify-between items-center mb-2 font-medium">
                <span className="text-stone-500">Subtotal</span>
                <span className="text-stone-900 font-bold">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 font-medium">
                <span className="text-stone-500">{isEs ? 'IVA (16%)' : 'Tax (16%)'}</span>
                <span className="text-stone-900 font-bold">{formatPrice(total * 0.16)}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-black text-stone-900 mt-6 pt-4 border-t border-stone-100">
                <span>{isEs ? 'Total a Pagar' : 'Total to Pay'}</span>
                <span>{formatPrice(total * 1.16)}</span>
              </div>
            </div>
            <Button type="submit" disabled={isProcessing} className="w-full bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 text-white font-bold h-14 rounded-xl text-lg transition-all border-none">
              {isProcessing ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : (isEs ? 'PROCESAR PAGO' : 'PROCESS PAYMENT')}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}