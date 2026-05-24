import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Danella" },
      {
        name: "description",
        content:
          "A trajetória de Danella: formação, influências e o caminho até Ecos de Silêncio.",
      },
      { property: "og:title", content: "Sobre Danella" },
      { property: "og:description", content: "Biografia da cantora Danella." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [
      { rel: "canonical", href: "/sobre" },
      { rel: "preload", href: aboutImg, as: "image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 max-w-3xl animate-fade-up">
          <SectionLabel index="01">Biografia</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-tight text-balance md:text-7xl">
            A arte de habitar uma canção.
          </h1>
        </header>

        <div className="grid gap-16 md:grid-cols-12">
          <figure className="md:col-span-5">
            <img
              src={aboutImg}
              alt="Retrato editorial de Danella"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full object-cover"
            />
            <figcaption className="mt-4 text-[10px] uppercase tracking-luxury text-brand-light/40">
              Retrato — São Paulo, 2024
            </figcaption>
          </figure>

          <div className="space-y-6 text-base leading-relaxed text-brand-light/75 md:col-span-6 md:col-start-7 md:text-lg">
            <p>
              Nascida no interior de Minas Gerais e formada em canto erudito
              pela Universidade de São Paulo, <strong>Danella</strong>
              começou a carreira em pequenas casas de jazz antes de se firmar
              como uma das vozes mais singulares de sua geração.
            </p>
            <p>
              Sua música transita entre o samba-canção, o jazz contemporâneo e
              a canção autoral, sempre com uma assinatura cinematográfica —
              arranjos generosos, silêncios calculados, presença total.
            </p>
            <p>
              Já dividiu palcos com Hamilton de Holanda, Tigran Hamasyan e a
              Orquestra Sinfônica do Estado de São Paulo. Em 2024, lança
              <em> Ecos de Silêncio</em>, seu terceiro álbum de estúdio,
              gravado entre São Paulo e Lisboa.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-12">
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Origem</dt>
                <dd className="mt-2 font-display text-2xl">Minas Gerais, BR</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Selo</dt>
                <dd className="mt-2 font-display text-2xl">Vale Records</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Álbuns</dt>
                <dd className="mt-2 font-display text-2xl">3</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Idiomas</dt>
                <dd className="mt-2 font-display text-2xl">PT · EN · FR</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}
