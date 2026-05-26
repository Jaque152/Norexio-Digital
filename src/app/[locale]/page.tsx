import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Cart />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <AboutUs />
      <WhyChooseUs />
      <ContactForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
