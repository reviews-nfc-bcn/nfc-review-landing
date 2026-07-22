import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Nfc, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SenyeraFlag, SpainFlag } from "./Flags";

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "#producto", label: t.header.nav.producto },
    { href: "#beneficios", label: t.header.nav.beneficios },
    { href: "#como-funciona", label: t.header.nav.comoFunciona },
    { href: "#precios", label: t.header.nav.precios },
    { href: "#faq", label: t.header.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:h-20 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-google-blue/25 to-brand-indigo/25">
            <Nfc className="h-4 w-4 text-white" strokeWidth={1.75} />
          </div>
          <span className="font-display text-base font-bold text-white">NFC Reviews BCN</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle language={language} onToggle={toggleLanguage} labelCa={t.header.switchToCa} labelEs={t.header.switchToEs} />

          <div className="hidden lg:block">
            <Button
              className="px-5 py-2.5 text-sm"
              icon={<MessageCircle className="h-4 w-4" />}
              onClick={() => openWhatsApp(t.whatsapp.order)}
            >
              {t.header.ctaButton}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-base-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-3 justify-center px-5 py-2.5 text-sm"
                icon={<MessageCircle className="h-4 w-4" />}
                onClick={() => {
                  setOpen(false);
                  openWhatsApp(t.whatsapp.order);
                }}
              >
                {t.header.ctaButton}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

interface LanguageToggleProps {
  language: "es" | "ca";
  onToggle: () => void;
  labelCa: string;
  labelEs: string;
}

function LanguageToggle({ language, onToggle, labelCa, labelEs }: LanguageToggleProps) {
  const isCa = language === "ca";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isCa ? labelEs : labelCa}
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10"
    >
      {isCa ? (
        <SpainFlag className="h-3.5 w-5 rounded-[2px] ring-1 ring-white/20" />
      ) : (
        <SenyeraFlag className="h-3.5 w-5 rounded-[2px] ring-1 ring-white/20" />
      )}
      {isCa ? "ES" : "CA"}
    </button>
  );
}
