import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { ProductGallery } from "@/components/ProductGallery/ProductGallery";
import { Benefits } from "@/components/Benefits/Benefits";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Pricing } from "@/components/Pricing/Pricing";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { Footer } from "@/components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGallery />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
