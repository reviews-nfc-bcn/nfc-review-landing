import { motion } from "framer-motion";
import { Ban, Palette, Smartphone, TrendingUp, Wifi, Zap } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const benefitStyles = [
  { icon: Wifi, from: "from-google-blue/25", to: "to-google-blue/5", iconColor: "text-google-blue" },
  { icon: Ban, from: "from-google-red/25", to: "to-google-red/5", iconColor: "text-google-red" },
  { icon: Zap, from: "from-google-yellow/25", to: "to-google-yellow/5", iconColor: "text-google-yellow" },
  { icon: Smartphone, from: "from-google-green/25", to: "to-google-green/5", iconColor: "text-google-green" },
  { icon: Palette, from: "from-brand-indigo/25", to: "to-brand-indigo/5", iconColor: "text-brand-indigo" },
  { icon: TrendingUp, from: "from-google-blue/25", to: "to-brand-indigo/10", iconColor: "text-white" },
];

export function Benefits() {
  const { t } = useLanguage();
  const benefits = benefitStyles.map((style, i) => ({ ...style, ...t.benefits.items[i] }));

  return (
    <section id="beneficios" className="relative overflow-hidden bg-base-950 py-20 sm:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-google-blue/5 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.benefits.heading}
          </h2>
          <p className="mt-4 text-balance text-base text-slate-400 sm:text-lg">{t.benefits.paragraph}</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description, from, to, iconColor }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${from} ${to}`}>
                <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
