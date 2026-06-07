import { createFileRoute, Link } from "@tanstack/react-router";
import { AGENDA_VISIBLE } from "@/lib/feature-flags";
import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import album1 from "@/assets/album-1.jpg";
import { SectionLabel } from "@/components/SectionLabel";
import { Scrollytelling } from "@/components/Scrollytelling";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danella — Cantora, intérprete e compositora" },
      {
        name: "description",
        content:
          "Site oficial de Danella. Ouça o novo álbum, veja a agenda de shows e contrate apresentações.",
      },
      { property: "og:title", content: "Danella — Site Oficial" },
      { property: "og:description", content: "Música cinematográfica, ao vivo e em estúdio." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Danella em performance"
          width={1080}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-top animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/30 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-brand-dark/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-6 text-[10px] uppercase tracking-hero text-brand-accent">
              Novo álbum • Disponível agora
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-balance text-brand-light md:text-8xl lg:text-[9rem]">
              Ecos de <span className="italic">Silêncio</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-light/70 md:text-lg">
              Onze canções sobre travessias, memória e a luz que insiste em
              voltar. Uma obra cinematográfica, escrita à voz e ao piano.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/discografia"
                className="group inline-flex items-center gap-3 bg-brand-light px-8 py-4 text-[10px] font-semibold uppercase tracking-luxury text-brand-dark transition-all hover:bg-brand-accent"
              >
                Ouvir agora
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              {AGENDA_VISIBLE && (
                <Link
                  to="/agenda"
                  className="inline-flex items-center gap-3 border border-brand-light/30 px-8 py-4 text-[10px] font-semibold uppercase tracking-luxury text-brand-light transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  Próximos shows
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <div className="h-16 w-px bg-gradient-to-b from-brand-accent to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01">A artista</SectionLabel>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="font-display text-4xl leading-tight text-balance md:text-6xl">
              Uma voz que atravessa o silêncio e devolve <em className="text-brand-accent">presença</em>.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-light/70 md:text-lg">
              Danella constrói uma linguagem própria entre a canção
              brasileira contemporânea, o jazz íntimo e arranjos
              orquestrais. Suas performances são ritualísticas — pensadas como
              cinema: luz, gesto, respiração.
            </p>
            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center gap-3 border-b border-brand-accent pb-1 text-[10px] uppercase tracking-luxury text-brand-light hover:text-brand-accent"
            >
              Ler biografia →
            </Link>
          </div>
        </div>
      </section>

      {/* SCROLLYTELLING */}
      <Scrollytelling />


      {/* FEATURED RELEASE + PLAYER */}
      <section className="border-t border-border bg-brand-muted/30 px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <SectionLabel index="03">Último lançamento</SectionLabel>
            <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Ecos de Silêncio
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-brand-light/65">
              Gravado entre São Paulo e Lisboa, o álbum reúne onze canções
              originais e duas releituras. Uma exploração íntima da fragilidade
              como força.
            </p>

            <div className="mt-10 overflow-hidden rounded-sm shadow-2xl">
              <iframe
                title="Player Spotify - Danella"
                src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3?utm_source=generator&theme=0"
                className="block w-full"
                height={352}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={album1}
              alt="Capa do álbum Ecos de Silêncio"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <img
              src={gallery1}
              alt="Danella ao microfone"
              loading="lazy"
              width={1024}
              height={1280}
              className="mt-12 aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WIDE IMAGE */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={gallery2}
          alt="Performance ao piano"
          loading="lazy"
          width={1024}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-12 mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-display text-3xl italic text-brand-light/90 md:text-5xl max-w-3xl text-balance">
            “Cantar é traduzir o tempo em luz.”
          </p>
        </div>
      </section>

      {/* CTA BOOKING */}
      <section className="px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <SectionLabel index="04">Contratação</SectionLabel>
          <h2 className="mt-8 font-display text-4xl leading-tight text-balance md:text-6xl">
            Para um show, festival ou evento privado.
          </h2>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 bg-brand-accent px-10 py-5 text-[10px] font-semibold uppercase tracking-luxury text-brand-dark hover:bg-brand-light"
          >
            Solicitar proposta →
          </Link>
        </div>
      </section>
    </>
  );
}
