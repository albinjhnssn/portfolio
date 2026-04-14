"use client";
import { motion } from "framer-motion";

export function ProjectHero({ gradient }: { gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden w-full"
      style={{ height: "50vh", minHeight: "300px" }}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
    </motion.div>
  );
}
