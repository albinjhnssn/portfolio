"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type React from "react";

export function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  blur?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
