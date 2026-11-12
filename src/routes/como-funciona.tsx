import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Como Funciona o HD Player — Instalação e Ativação em Minutos";
const DESCRIPTION =
  "Entenda como funciona o HD Player: escolha seu plano, receba suas credenciais pelo WhatsApp, instale o aplicativo na Smart TV ou TV Box e assista em 4K.";

const STEPS = [
  { n: "01", t: "Escolha seu plano HD Player", d: "Selecione a duração ideal para seu perfil (mensal, trimestral, semestral ou anual) com acesso irrestrito." },
  { n: "02", t: "Atendimento no WhatsApp", d: "Confirme sua solicitação e receba o link de pagamento seguro com liberação imediata via Pix." },
  { n: "03", t: "Receba seus dados de acesso", d: "Você recebe na hora o usuário, senha e URL Xtream Codes / M3U junto com tutoriais visuais." },
  { n: "04", t: "Instale o HD Player", d: "Baixe o aplicativo oficial na loja da sua Smart TV Samsung, LG, Android TV, Fire Stick ou TV Box." },
  { n: "05", t: "Carregue sua grade de canais", d: "Insira suas credenciais no app: o HD Player sincroniza mais de 30.000 títulos e o EPG em segundos." },
  { n: "06", t: "Aproveite com suporte contínuo", d: "Suporte dedicado todos os dias no WhatsApp para orientar em qualquer configuração ou dúvida." },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/como-funciona" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como configurar e ativar o HD Player",
        step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
      }),
    }],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Como Funciona" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Como Funciona"
          title={<>Ativação do HD Player <span className="gradient-text">simples e sem burocracia</span></>}
          description="Do primeiro contato à reprodução em 4K: seis etapas diretas, sem necessidade de antenas ou técnicos em sua casa."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="glass-card rounded-2xl p-7">
              <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
              <h2 className="mt-3 font-display text-xl font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Ativação HD Player" label="Fazer Teste Grátis Agora" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
