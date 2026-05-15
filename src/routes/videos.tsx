import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — Aurora Vale" },
      { name: "description", content: "Clipes oficiais e performances ao vivo." },
      { property: "og:title", content: "Vídeos — Aurora Vale" },
      { property: "og:description", content: "Assista clipes e ao vivo." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

const videos = [
  { id: "lTRiuFIWV54", title: "Ecos de Silêncio (Clipe Oficial)", year: "2024" },
  { id: "5qap5aO4i9A", title: "Sessão ao Vivo — Estúdio Vale", year: "2024" },
  { id: "DWcJFNfaw9c", title: "Hora de Veludo (Acústico)", year: "2022" },
  { id: "jfKfPfyJRdk", title: "Concerto Sala São Paulo", year: "2023" },
];

function VideosPage() {
  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 max-w-3xl animate-fade-up">
          <SectionLabel index="05">Vídeos</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            Clipes & ao vivo.
          </h1>
        </header>

        {/* Featured */}
        <div className="mb-16 overflow-hidden border border-border bg-brand-muted/40">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id}?rel=0`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center justify-between px-6 py-6">
            <h2 className="font-display text-2xl md:text-3xl">{videos[0].title}</h2>
            <span className="text-[10px] uppercase tracking-luxury text-brand-accent">{videos[0].year}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {videos.slice(1).map((v) => (
            <article key={v.id} className="group">
              <div className="aspect-video w-full overflow-hidden border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg leading-tight">{v.title}</h3>
                <span className="text-[10px] uppercase tracking-luxury text-brand-light/40">{v.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
