import { Mail, MessageCircle, Nfc } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-base-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between lg:px-8">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-google-blue/25 to-brand-indigo/25">
              <Nfc className="h-4 w-4 text-white" strokeWidth={1.75} />
            </div>
            <span className="font-display text-base font-bold text-white">NFC Reviews BCN</span>
          </div>
          <p className="text-sm text-slate-500">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {t.footer.contact}
          </span>
          <a
            href="https://wa.me/34640610268"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-google-green" />
            +34 640 61 02 68
          </a>
          <a
            href="mailto:reviews.nfc.bcn@gmail.com"
            className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-google-blue" />
            reviews.nfc.bcn@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 lg:px-8">
        <p className="text-center text-xs text-slate-600">
          © {year} NFC Reviews BCN. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
