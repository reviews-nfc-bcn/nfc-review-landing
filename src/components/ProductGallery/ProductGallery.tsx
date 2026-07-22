import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Nfc, Wifi } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import productBlanco from "@/producto-nfc-blanco.png";
import productNegro from "@/producto-nfc-negro.png";

const colorOptions = [
  { id: "negro", swatch: "bg-[#111318]", image: productNegro },
  { id: "blanco", swatch: "bg-white", image: productBlanco },
] as const;

export function ProductGallery() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<(typeof colorOptions)[number]["id"]>("negro");
  const active = colorOptions.find((c) => c.id === activeId)!;

  const labels: Record<(typeof colorOptions)[number]["id"], string> = {
    negro: t.productGallery.colorNegro,
    blanco: t.productGallery.colorBlanco,
  };

  const features = [
    { icon: Wifi, label: t.productGallery.featureNfc },
    { icon: Check, label: t.productGallery.featureNoApps },
  ];

  return (
    <section id="producto" className="relative overflow-hidden bg-base-900/40 py-20 sm:py-28">
      <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-google-blue/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-brand-indigo/15 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* image stage */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative order-1 flex items-center justify-center lg:order-none"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-indigo/20 blur-[100px]" />
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`${t.productGallery.altPrefix} ${labels[active.id]}`}
                initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotate: 4 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.6)]"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* floating rating chip, reused motif from the hero */}
          <div className="absolute -top-2 right-4 flex items-center gap-1 rounded-full border border-white/10 bg-base-950/90 px-3 py-1.5 shadow-xl backdrop-blur-md sm:right-8">
            <Nfc className="h-3.5 w-3.5 text-brand-indigo" />
            <span className="text-xs font-semibold text-slate-200">{t.productGallery.badge}</span>
          </div>
        </motion.div>

        {/* copy + color switcher */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.productGallery.heading}
          </h2>
          <p className="mt-4 max-w-md text-balance text-base text-slate-400 sm:text-lg">
            {t.productGallery.paragraph}
          </p>

          <div className="mt-8 flex items-center gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => setActiveId(color.id)}
                aria-pressed={active.id === color.id}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active.id === color.id
                    ? "border-brand-indigo/60 bg-brand-indigo/15 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06]"
                }`}
              >
                <span className={`h-3.5 w-3.5 rounded-full border border-white/20 ${color.swatch}`} />
                {labels[color.id]}
              </button>
            ))}
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon className="h-4 w-4 text-brand-indigo" strokeWidth={1.75} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
