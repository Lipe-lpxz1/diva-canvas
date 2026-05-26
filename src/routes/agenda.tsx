import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda de Shows — Danella" },
      { name: "description", content: "Próximas apresentações e turnê de Danella." },
      { property: "og:title", content: "Agenda — Danella" },
      { property: "og:description", content: "Datas, cidades e ingressos." },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});

const shows = [
  { date: "14 Jun", city: "São Paulo, BR", venue: "Sala São Paulo", status: "Ingressos" },
  { date: "22 Jun", city: "Rio de Janeiro, BR", venue: "Theatro Municipal", status: "Esgotado" },
  { date: "05 Jul", city: "Lisboa, PT", venue: "Centro Cultural de Belém", status: "Ingressos" },
  { date: "18 Jul", city: "Paris, FR", venue: "Théâtre des Bouffes du Nord", status: "Ingressos" },
  { date: "02 Ago", city: "Londres, UK", venue: "Cadogan Hall", status: "Em breve" },
  { date: "20 Ago", city: "Berlin, DE", venue: "Funkhaus Nalepastraße", status: "Ingressos" },
];

export function AgendaPage() {
  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="animate-fade-up">
            <SectionLabel index="02">Ao vivo</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,8vw,4.5rem)] leading-[1.05]">
              Turnê <em>Ecos de Silêncio</em>
            </h1>
          </div>
          <p className="text-[10px] uppercase tracking-luxury text-brand-light/50 md:border-b md:border-brand-accent md:pb-1">
            Temporada 2025 · Mundial
          </p>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {shows.map((s) => (
            <li
              key={`${s.date}-${s.city}`}
              className="group grid grid-cols-1 items-center gap-4 py-8 transition-all md:grid-cols-12 md:gap-6 md:py-10 md:hover:pl-4"
            >
              <span className="font-display text-2xl italic text-brand-accent md:col-span-2">
                {s.date}
              </span>
              <div className="md:col-span-5">
                <p className="font-display text-2xl text-brand-light md:text-3xl">{s.city}</p>
              </div>
              <p className="text-sm text-brand-light/55 md:col-span-3">{s.venue}</p>
              <div className="md:col-span-2 md:text-right">
                <button
                  disabled={s.status !== "Ingressos"}
                  className="border border-brand-light/25 px-6 py-2.5 text-[10px] uppercase tracking-luxury transition-colors enabled:hover:bg-brand-light enabled:hover:text-brand-dark disabled:opacity-40"
                >
                  {s.status}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-md text-sm text-brand-light/55">
          Para apresentações privadas, festivais ou novas datas, escreva para{" "}
          <a href="mailto:booking@danella.com" className="text-brand-accent hover:underline">
            booking@danella.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
