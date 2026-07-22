import { motion } from "framer-motion";
import { MapPin, Smartphone, Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [MapPin, Smartphone, Star];

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = stepIcons.map((icon, i) => ({ icon, ...t.howItWorks.steps[i] }));

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-base-900/40 py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.howItWorks.heading}
          </h2>
          <p className="mt-4 text-balance text-base text-slate-400 sm:text-lg">{t.howItWorks.paragraph}</p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:block" />

          {steps.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.15 * i}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-base-950 shadow-glow">
                <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-google-blue to-brand-indigo text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
