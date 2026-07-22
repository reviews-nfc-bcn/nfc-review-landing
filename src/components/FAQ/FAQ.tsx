import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="relative bg-base-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.faq.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          className="mt-12 flex flex-col gap-3"
        >
          {t.faq.items.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white">
                {question}
                <ChevronDown className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
