import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Danella" },
      { name: "description", content: "Imagens de palco, estúdio e ensaios." },
      { property: "og:title", content: "Galeria — Danella" },
      { property: "og:description", content: "Visuais e bastidores." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

const images = [
  { src: hero, alt: "Danella ao microfone, luz dourada", caption: "Sala São Paulo, 2024" },
  { src: gallery1, alt: "Detalhe — microfone vintage", caption: "Estúdio Vale, Lisboa" },
  { src: gallery2, alt: "Danella ao piano, contraluz", caption: "Ensaio — Theatro Municipal" },
  { src: gallery3, alt: "Silhueta no palco", caption: "Festival Coliseu, 2023" },
  { src: about, alt: "Retrato editorial", caption: "Editorial Vogue Brasil" },
];

function GaleriaPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl animate-fade-up">
          <SectionLabel index="03">Galeria</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            Imagens em <em>movimento</em>.
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          <button onClick={() => setActive(0)} className="group relative md:col-span-7 overflow-hidden">
            <img src={images[0].src} alt={images[0].alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(1)} className="group relative md:col-span-5 overflow-hidden">
            <img src={images[1].src} alt={images[1].alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(2)} className="group relative md:col-span-5 overflow-hidden">
            <img src={images[2].src} alt={images[2].alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(3)} className="group relative md:col-span-7 overflow-hidden">
            <img src={images[3].src} alt={images[3].alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(4)} className="group relative md:col-span-12 overflow-hidden">
            <img src={images[4].src} alt={images[4].alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 px-4 py-8 backdrop-blur-md animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Fechar"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-[10px] uppercase tracking-luxury text-brand-light/70 hover:text-brand-accent"
          >
            Fechar ✕
          </button>
          <figure className="max-h-full max-w-6xl">
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[85vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-[10px] uppercase tracking-luxury text-brand-light/60">
              {images[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
