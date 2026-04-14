import Image from "next/image";
import { Nav } from "@/components/Nav";
import { AnimateIn } from "@/components/AnimateIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";


export default function Home() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[1680px] mx-auto px-12 min-h-[calc(100vh-4rem)] flex flex-col py-12">

        {/* Bottom: photo + text left — social right */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex items-end justify-between gap-8">

            {/* Photo + bio — bottom-left */}
            <div className="flex flex-col gap-6">
              <AnimateIn delay={0.15} blur>
                <div
                  className="relative overflow-hidden rounded-xl shrink-0 aspect-[4/3]"
                  style={{ width: "550px" }}
                >
                  <Image
                    src="/albin-johansson.webp"
                    alt="Albin Johansson"
                    fill
                    className="object-cover object-top grayscale"
                    priority
                  />
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p
                  className="font-[500] leading-[1.35] tracking-[-0.02em] max-w-[600px]"
                  style={{ fontSize: "24px" }}
                >
                  <span className="text-white">Product Designer from Karlstad, Sweden. I like the space between design and </span>
                  <span style={{ color: "#9E9E9E" }}>code, understanding both sides makes better products.</span>
                </p>
              </AnimateIn>
            </div>

            {/* Social links — bottom-right */}
            <AnimateIn delay={0.25} className="flex flex-row gap-2.5 items-end pb-1 shrink-0">
              <a
                href="mailto:albinjhnssn@outlook.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] text-sm font-[600] text-white/50 hover:text-white hover:bg-white/[0.12] transition-all"
              >
                Email <span className="text-white/25">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/albinjhnssn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] text-sm font-[600] text-white/50 hover:text-white hover:bg-white/[0.12] transition-all"
              >
                LinkedIn <span className="text-white/25">↗</span>
              </a>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────── */}
      <section id="work" className="max-w-[1680px] mx-auto px-12 py-24">
        <AnimateIn>
          <h2 className="text-2xl font-[500] tracking-[-0.025em] text-white mb-12">
            Selected work
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="max-w-[1680px] mx-auto px-12 py-24">
        <AnimateIn>
          <h2 className="text-2xl font-[500] tracking-[-0.025em] text-white mb-8">
            A little about me
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <div className="space-y-5 text-[1.0625rem] leading-[1.7] text-white/60 tracking-[-0.01em] max-w-2xl">
            <p>
              I've been into graphic design since I was 12 — it started with
              making logos in Photoshop and grew into a deep interest in how
              things look and feel. After 6 years working across design and
              frontend development, I take products from initial concept all
              the way to production.
            </p>
            <p>
              I'm currently UX/UI Designer & Frontend Developer at Decision By
              Heart. I like the space between design and code — understanding
              both sides makes better products.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="max-w-[1680px] mx-auto px-12 py-24">
        <AnimateIn>
          <h2 className="text-2xl font-[500] tracking-[-0.025em] text-white mb-8">
            Get in touch
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:albinjhnssn@outlook.com"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#0D0D0D] text-sm font-[600] hover:bg-white/80 transition-colors"
            >
              albinjhnssn@outlook.com ↗
            </a>
            <a
              href="https://www.linkedin.com/in/albinjhnssn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.1] text-sm font-[600] text-white/55 hover:text-white hover:border-white/25 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer>
        <div className="max-w-[1680px] mx-auto px-12 py-8 flex flex-wrap justify-between items-center gap-4">
          <span className="text-sm text-white/30">© {new Date().getFullYear()} Albin Johansson</span>
          <span className="text-sm text-white/30">Karlstad, Sweden</span>
        </div>
      </footer>
    </div>
  );
}
