import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Clock, Shield } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const TITLE = "Contato HD Player — Atendimento Oficial pelo WhatsApp";
const DESCRIPTION =
  "Entre em contato com o suporte do HD Player. Atendimento humano no WhatsApp todos os dias para dúvidas, teste grátis, assinatura, renovação e suporte técnico.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contato" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contato`,
        mainEntity: {
          "@type": "Organization",
          name: "HD Player",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${WHATSAPP_PHONE}`,
            contactType: "customer support",
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          },
        },
      }),
    }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Contato"
          title={<>Fale com a <span className="gradient-text">equipe HD Player</span></>}
          description="Canal direto de atendimento pelo WhatsApp com especialistas prontos para ajudar. Escolha o assunto abaixo para iniciar."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: MessageCircle, t: "Assinatura e Teste Grátis", d: "Quer experimentar o HD Player antes de assinar? Peça seu teste pelo WhatsApp.", k: "Assinatura e Teste HD Player" },
            { icon: Clock, t: "Renovação de Acesso", d: "Perto do vencimento? Renove sua conta em minutos sem perder favoritos ou configurações.", k: "Renovação HD Player" },
            { icon: Shield, t: "Suporte Técnico", d: "Dúvidas de instalação, configuração de codecs ou lista de canais? Nosso time resolve junto.", k: "Suporte Técnico HD Player" },
          ].map(({ icon: Icon, t, d, k }) => (
            <article key={t} className="glass-card rounded-2xl p-7 flex flex-col">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{d}</p>
              <div className="mt-5"><WhatsAppButton keyword={k} label="Abrir WhatsApp" variant="whatsapp" size="sm" /></div>
            </article>
          ))}
        </div>

        <div className="mt-14 glass-card rounded-2xl p-10 text-center">
          <p className="text-sm text-muted-foreground">Atendimento Humano · Todos os Dias</p>
          <p className="mt-2 font-display text-2xl font-bold">WhatsApp: +55 (11) 93382-1957</p>
        </div>
      </section>
    </div>
  );
}
