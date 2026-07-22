import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  if (variant === "ghost") {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-colors hover:bg-white/10",
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-indigo via-google-blue to-brand-indigo bg-[length:200%_100%] px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-[background-position] duration-500 hover:bg-[position:100%_0]",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-indigo to-google-blue opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
      {children}
      {icon}
    </motion.button>
  );
}
