import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const testimonialStyles = [
  { from: "from-google-blue", to: "to-brand-indigo" },
  { from: "from-google-green", to: "to-google-blue" },
  { from: "from-google-red", to: "to-google-yellow" },
];

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = testimonialStyles.map((style, i) => ({ ...style, ...t.testimonials.items[i] }));

  return (
    <section className="relative bg-base-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-balance text-base text-slate-400 sm:text-lg">{t.testimonials.paragraph}</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, from, to }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.08 * i}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-brand-indigo" strokeWidth={1.5} />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-google-yellow text-google-yellow" />
                  ))}
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">"{quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${from} ${to} font-display text-sm font-bold text-white`}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-slate-600">{t.testimonials.disclaimer}</p>
      </div>
    </section>
  );
}
