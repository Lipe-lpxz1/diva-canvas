import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

export const Route = createFileRoute("/discografia")({
  head: () => ({
    meta: [
      { title: "Discografia — Danella" },
      { name: "description", content: "Álbuns, EPs e singles de Danella." },
      { property: "og:title", content: "Discografia — Danella" },
      { property: "og:description", content: "Ouça toda a obra fonográfica." },
      { property: "og:url", content: "/discografia" },
    ],
    links: [{ rel: "canonical", href: "/discografia" }],
  }),
  component: DiscografiaPage,
});

const records = [
  {
    cover: album1,
    title: "Ecos de Silêncio",
    year: "2024",
    type: "LP · 11 faixas",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
  },
  {
    cover: album2,
    title: "Hora de Veludo",
    year: "2022",
    type: "EP · 5 faixas",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
  },
  {
    cover: album3,
    title: "Lumina",
    year: "2020",
    type: "Single",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
  },
];

function DiscografiaPage() {
  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 max-w-3xl animate-fade-up">
          <SectionLabel index="04">Discografia</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,8vw,4.5rem)] leading-[1.05]">
            Toda a <em>obra</em>.
          </h1>
        </header>

        <div className="space-y-32">
          {records.map((r, i) => (
            <article
              key={r.title}
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                i % 2 === 1 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="group relative overflow-hidden">
                <img
                  src={r.cover}
                  alt={`Capa do álbum ${r.title}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-brand-accent">
                  {r.year} · {r.type}
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,7vw,3.75rem)] leading-[1.05]">
                  {r.title}
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-brand-light/65">
                  Uma obra que reúne a delicadeza da canção brasileira com a
                  amplitude cinematográfica de arranjos orquestrais.
                </p>
                <div className="mt-8 overflow-hidden rounded-sm border border-border">
                  <iframe
                    title={`Spotify ${r.title}`}
                    src={`https://open.spotify.com/embed/album/${r.spotify}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder={0}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
