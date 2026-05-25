"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { submitContact } from "@/actions/contact";
import { ContactFormData } from "@/types"; // Importación correcta
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    nombre_completo: "",
    empresa_negocio: "",
    telefono: "",
    correo_electronico: "",
    asunto: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitContact(formData, locale);
    setIsSubmitting(false);
    alert("Enviado");
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-stone-50">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <Input placeholder="Nombre Completo" className="mb-4" onChange={(e)=>setFormData({...formData, nombre_completo: e.target.value})} />
        <textarea className="w-full border p-4 rounded-xl mb-4" placeholder="Mensaje" onChange={(e)=>setFormData({...formData, mensaje: e.target.value})} />
        <Button type="submit" disabled={isSubmitting} className="bg-emerald-600 text-white w-full h-12 rounded-xl">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
        </Button>
      </form>
    </main>
  );
}