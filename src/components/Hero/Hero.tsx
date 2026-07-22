import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ProductShowcase } from "./ProductShowcase";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-base-950">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-indigo/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pb-20 pt-14 sm:pt-20 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:pb-32">
        {/* left column: copy */}
        <div className="flex max-w-2xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <MapPin className="h-3.5 w-3.5 text-google-blue" />
            <span className="text-xs font-medium text-slate-300">{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.titlePrefix}
            <span className="bg-gradient-to-r from-google-blue via-brand-indigo to-google-blue bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            {t.hero.titleSuffix}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="mt-6 max-w-xl text-balance text-base text-slate-400 sm:text-lg"
          >
            {t.hero.paragraph}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              onClick={() => openWhatsApp(t.whatsapp.order)}
            >
              {t.hero.ctaButton}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.46}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <div className="flex -space-x-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-google-yellow text-google-yellow" />
              ))}
            </div>
            <span className="text-sm font-medium text-slate-300">{t.hero.rating}</span>
          </motion.div>
        </div>

        {/* right column: interactive 3D visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-1 items-center justify-center"
        >
          <ProductShowcase />
        </motion.div>
      </div>
    </section>
  );
}
