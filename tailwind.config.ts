import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0B0F17",
          900: "#111827",
        },
        google: {
          blue: "#4285F4",
          yellow: "#FBBC05",
          green: "#34A853",
          red: "#EA4335",
        },
        brand: {
          indigo: "#6366F1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["\"Plus Jakarta Sans\"", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(99, 102, 241, 0.55)",
        "glow-yellow": "0 0 40px -10px rgba(251, 188, 5, 0.45)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.25) 0%, rgba(11,15,23,0) 70%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
