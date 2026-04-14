"use client";
import { motion } from "framer-motion";

export function HeroName() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="font-[620] leading-none tracking-[-0.045em] whitespace-nowrap text-[#0a0a0a] dark:text-[#f2f1ed]"
      style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}
    >
      Albin Johansson
    </motion.h1>
  );
}
