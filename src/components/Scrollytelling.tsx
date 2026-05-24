import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { SectionLabel } from "@/components/SectionLabel";

const chapters = [
  {
    no: "I",
    title: "Origem",
    text: "Recife, varanda, rádio antigo. A primeira melodia foi um sussurro herdado da avó.",
    img: gallery1,
  },
  {
    no: "II",
    title: "Travessia",
    text: "Entre São Paulo e Lisboa, a voz encontrou seu próprio idioma — leve, denso, exato.",
    img: gallery2,
  },
  {
    no: "III",
    title: "Presença",
    text: "Hoje cada show é um ritual. Luz baixa, respiração, o tempo se dobrando.",
    img: gallery3,
  },
];

export function Scrollytelling() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      refs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActive(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative border-t border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.accent/8%),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-44">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="02">A jornada</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Três capítulos, <em className="text-brand-accent">uma só voz</em>.
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
        {/* Sticky image (Desktop only) */}
        <div className="hidden md:block md:col-span-6 md:col-start-7 md:order-2">
          <div className="sticky top-24 aspect-[4/5] overflow-hidden">
            {chapters.map((c, i) => (
              <img
                key={c.no}
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[800ms] ease-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1)" : "scale(1.02)",
                }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          </div>
        </div>

        {/* Chapters */}
        <ol className="md:col-span-5 md:order-1 w-full">
          {chapters.map((c, i) => (
            <li
              key={c.no}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-idx={i}
              className="flex min-h-[50vh] md:min-h-[70vh] flex-col justify-center py-12 md:py-0"
            >
              {/* Mobile Inline Image */}
              <div className="md:hidden mb-6 aspect-[16/9] w-full overflow-hidden rounded-sm border border-border">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="transition-all duration-[600ms] ease-out"
                style={{
                  opacity: active === i ? 1 : 0.25,
                  transform: active === i ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <span className="font-display text-2xl italic text-brand-accent">
                  {c.no}
                </span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-brand-light/70">
                  {c.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
