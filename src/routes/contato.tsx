import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato & Contratação — Aurora Vale" },
      { name: "description", content: "Formulário de contratação e contatos da equipe." },
      { property: "og:title", content: "Contato — Aurora Vale" },
      { property: "og:description", content: "Booking, imprensa e parcerias." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-12">
        <div className="md:col-span-5 animate-fade-up">
          <SectionLabel index="06">Contato</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
            Vamos criar algo <em>memorável</em>.
          </h1>
          <p className="mt-8 max-w-md leading-relaxed text-brand-light/65">
            Para shows, festivais, eventos privados, imprensa e parcerias —
            entre em contato. Respondemos em até 48 horas.
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Booking</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="mailto:booking@auroravale.com" className="hover:text-brand-accent">
                  booking@auroravale.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Imprensa</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="mailto:press@auroravale.com" className="hover:text-brand-accent">
                  press@auroravale.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Instagram</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-accent">
                  @auroravale
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8 md:col-span-6 md:col-start-7"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Field label="Nome">
              <input type="text" required className={inputCls} />
            </Field>
            <Field label="Empresa / Veículo">
              <input type="text" className={inputCls} />
            </Field>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Field label="E-mail">
              <input type="email" required className={inputCls} />
            </Field>
            <Field label="Telefone">
              <input type="tel" className={inputCls} />
            </Field>
          </div>
          <Field label="Tipo de evento">
            <select className={inputCls + " appearance-none"} defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Show / Festival</option>
              <option>Evento privado</option>
              <option>Imprensa</option>
              <option>Parceria</option>
            </select>
          </Field>
          <Field label="Mensagem">
            <textarea rows={5} required className={inputCls + " resize-none"} />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="w-full bg-brand-light px-8 py-5 text-[10px] font-semibold uppercase tracking-luxury text-brand-dark transition-colors hover:bg-brand-accent disabled:opacity-60"
          >
            {sent ? "Mensagem enviada — obrigada" : "Enviar solicitação"}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full border-b border-border bg-transparent py-3 text-base text-brand-light outline-none transition-colors focus:border-brand-accent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-luxury text-brand-light/50">{label}</span>
      {children}
    </label>
  );
}
