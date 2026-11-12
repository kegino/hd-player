import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FULL_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "FAQ HD Player — Perguntas Frequentes sobre o Reprodutor IPTV";
const DESCRIPTION =
  "Tire todas as suas dúvidas sobre o HD Player: como instalar na Smart TV ou TV Box, compatibilidade M3U e Xtream Codes, qualidade 4K, planos e teste grátis.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/faq" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FULL_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "FAQ" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="FAQ HD Player"
          title={<>Perguntas <span className="gradient-text">frequentes</span></>}
          description="Respostas claras para as principais perguntas sobre o HD Player e a configuração de listas em alta definição."
        />
        <div className="mt-14">
          <FaqAccordion items={FULL_FAQ} />
        </div>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Dúvidas HD Player" label="Falar com o suporte no WhatsApp" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
