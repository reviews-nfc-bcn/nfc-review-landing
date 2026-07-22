import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import productNegro from "@/producto-nfc-negro.png";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="precios" className="relative overflow-hidden bg-base-900/40 py-20 sm:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-indigo/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.pricing.heading}
          </h2>
          <p className="mt-4 text-balance text-base text-slate-400 sm:text-lg">{t.pricing.paragraph}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-1 flex items-center justify-center lg:order-none"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-brand-indigo/20 blur-[100px]" />
            <img
              src={productNegro}
              alt={t.pricing.altNegro}
              className="h-56 w-56 object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] sm:h-72 sm:w-72"
              draggable={false}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-8 shadow-2xl backdrop-blur-xl sm:p-10"
          >
            <span className="inline-flex items-center rounded-full border border-google-green/30 bg-google-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-google-green">
              {t.pricing.badge}
            </span>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">20€</span>
              <span className="mb-2 text-xl font-medium text-slate-500 line-through">30€</span>
              <span className="mb-2.5 text-sm font-medium text-slate-400">{t.pricing.oneTime}</span>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {t.pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-google-green" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-9 w-full justify-center"
              icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              onClick={() => openWhatsApp(t.whatsapp.orderOffer)}
            >
              {t.pricing.ctaButton}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
