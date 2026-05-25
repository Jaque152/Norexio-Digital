import type { Metadata } from "next";
import "../globals.css";
import { ClientBody } from "@/components/shared/ClientBody";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { NextIntlClientProvider } from 'next-intl';

import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Norexio Digital",
  description: "Especialistas en estrategias diseñadas exclusivamente para tiendas online. Supera las barreras del crecimiento digital.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={{}}>
          <ClientBody>
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ClientBody>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}