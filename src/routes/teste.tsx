import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Teste HD Player Grátis — Solicite pelo WhatsApp";
const DESCRIPTION =
  "Solicite agora seu teste grátis do HD Player e comprove a qualidade de reprodução em 4K sem travar. Mais de 30.000 canais, filmes e futebol ao vivo.";

const INCLUDES = [
  "Acesso liberado em menos de 3 minutos",
  "Grade com mais de 30.000 canais ao vivo em 4K e Full HD",
  "Catálogo completo de filmes e séries sob demanda",
  "Todos os canais de esportes e pay-per-view incluídos",
  "Compatível com Smart TV, Android, iPhone, Fire Stick e TV Box",
  "Suporte e orientação guiada via WhatsApp",
];

export const Route = createFileRoute("/teste")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teste" }),
  component: TestePage,
});

function TestePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Teste Grátis" }]} />
      </div>
      <section className="container-page pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Teste HD Player"
              title={<>Experimente o HD Player <span className="gradient-text">sem compromisso</span></>}
              description="Veja na sua própria tela a diferença de um reprodutor de IPTV moderno com streaming em 4K estável. Zero burocracia, sem pedir cartão."
              center={false}
            />
            <ul className="mt-8 space-y-3">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton keyword="Teste Grátis HD Player" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
              <WhatsAppButton keyword="Assinatura HD Player" label="Conhecer Planos" variant="primary" size="lg" />
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Como funciona o teste</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Pronto para assistir em 3 passos</h2>
              <ol className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Envie uma mensagem pelo botão do WhatsApp informando seu aparelho (Smart TV, Celular, TV Box, etc.).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Receba instantaneamente seu usuário, senha, URL e o link do app para download.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Faça login no HD Player e aproveite toda a programação liberada em alta definição.</span>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
