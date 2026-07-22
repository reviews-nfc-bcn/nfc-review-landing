import { useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import productBlanco from "@/producto-nfc-blanco.png";
import productNegro from "@/producto-nfc-negro.png";

interface TiltCardProps {
  src: string;
  alt: string;
  floatDuration: number;
  floatDelay?: number;
  className?: string;
}

function TiltCard({ src, alt, floatDuration, floatDelay = 0, className }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.35), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: 1400 }} className={className}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-40 w-32 cursor-pointer select-none items-center justify-center sm:h-56 sm:w-44 lg:h-72 lg:w-56"
      >
        {/* local backlight so dark plates still read against the dark hero */}
        <div className="absolute inset-[-10%] -z-10 rounded-full bg-gradient-to-b from-white/[0.08] via-brand-indigo/20 to-transparent blur-2xl" />
        <div className="absolute bottom-2 h-4 w-3/4 rounded-full bg-white/10 blur-md" />
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 z-10 rounded-[24px]"
        />
        <img
          src={src}
          alt={alt}
          className="relative h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export function ProductShowcase(): ReactNode {
  const { t } = useLanguage();

  return (
    <div className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-8">
      {/* ambient glow behind the plates */}
      <div className="absolute -inset-16 -z-10 rounded-full bg-brand-indigo/20 blur-3xl" />

      <TiltCard
        src={productBlanco}
        alt={t.hero.altBlanco}
        floatDuration={5.5}
        floatDelay={0.2}
        className="mt-6 sm:mt-8 lg:mt-10"
      />
      <TiltCard src={productNegro} alt={t.hero.altNegro} floatDuration={5} />
    </div>
  );
}
