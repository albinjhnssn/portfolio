"use client";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: index * 0.07 }}
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-video flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#1C1C1C", borderRadius: "16px" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-w-[85%] max-h-[75%] object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ borderRadius: "8px" }}
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between gap-4 mt-4">
        <h3 className="text-base font-[600] tracking-[-0.02em] text-white leading-snug">
          {project.title}
        </h3>
        <svg className="w-4 h-4 text-white/35 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-sm text-white/45 leading-relaxed line-clamp-2 mt-1.5">
        {project.description}
      </p>
    </motion.a>
  );
}
