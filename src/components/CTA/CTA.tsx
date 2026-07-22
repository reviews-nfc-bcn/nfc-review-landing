import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import productBlanco from "@/producto-nfc-blanco.png";
import productNegro from "@/producto-nfc-negro.png";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-base-950 py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/20 blur-[140px]" />

      <img
        src={productNegro}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-1/2 hidden h-64 w-64 -translate-y-1/2 -rotate-12 object-contain opacity-30 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] lg:block"
        draggable={false}
      />
      <img
        src={productBlanco}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 hidden h-64 w-64 -translate-y-1/2 rotate-12 object-contain opacity-30 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] lg:block"
        draggable={false}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          {t.cta.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          className="mt-4 text-balance text-base text-slate-400 sm:text-lg"
        >
          {t.cta.paragraph}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.2}
          className="mt-9 flex items-center justify-center"
        >
          <Button
            icon={<MessageCircle className="h-4 w-4" />}
            onClick={() => openWhatsApp(t.whatsapp.order)}
          >
            {t.cta.ctaButton}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
