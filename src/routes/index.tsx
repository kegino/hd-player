import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";
import heroBg from "@/assets/hero-bg.webp";

const TITLE = "HD Player — O Melhor Player e Reprodutor de IPTV em 4K e Full HD";
const DESCRIPTION =
  "HD Player: aplicativo oficial e reprodutor de IPTV em 4K sem travamentos. Compatível com Smart TV, TV Box e celular. Mais de 30.000 canais, filmes, séries e futebol ao vivo. Teste grátis imediato no WhatsApp.";

const BENEFITS = [
  { icon: Zap, title: "Streaming sem travamentos", desc: "Decodificação gráfica H265/HEVC com rotas de baixa latência e CDN no Brasil para máxima estabilidade." },
  { icon: Tv, title: "Mais de 30.000 canais", desc: "Grade nacional e internacional em 4K, Full HD e HD com EPG sincronizado em tempo real." },
  { icon: Film, title: "Filmes e séries sob demanda", desc: "Catálogo VOD atualizado semanalmente com lançamentos do cinema, dublados e legendados." },
  { icon: Trophy, title: "Futebol e esportes 60 FPS", desc: "Transmissões esportivas com alta taxa de quadros, baixa latência e canais pay-per-view inclusos." },
  { icon: ShieldCheck, title: "Compatibilidade total", desc: "Funciona perfeitamente com listas M3U e API Xtream Codes na sua Smart TV, TV Box ou smartphone." },
  { icon: Headphones, title: "Suporte dedicado", desc: "Atendimento humano todos os dias pelo WhatsApp para instalação, configuração e dúvidas." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano HD Player", desc: "Selecione entre os planos mensal, trimestral, semestral ou anual com melhor custo-benefício." },
  { n: "02", title: "Ativação rápida no WhatsApp", desc: "Receba seus dados de acesso (Xtream Codes / M3U) e o guia ilustrado de configuração." },
  { n: "03", title: "Conecte e assista em 4K", desc: "Abra o HD Player no seu aparelho, carregue sua lista e aproveite imagem sem engasgos." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "HD Player — Player e Reprodutor de IPTV",
          category: "Software de Reprodução e Streaming IPTV",
          brand: { "@type": "Brand", name: "HD Player" },
          description: DESCRIPTION,
          image: `${SITE_URL}/og-image.webp`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "8940",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "35",
            highPrice: "280",
            offerCount: PLANS.length,
            url: `${SITE_URL}/planos`,
            availability: "https://schema.org/InStock",
            offers: PLANS.map((p) => ({
              "@type": "Offer",
              name: `HD Player ${p.name}`,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Últimos artigos do blog HD Player",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que escolher o HD Player"
            title={<>A melhor experiência de reprodução IPTV <span className="gradient-text">na sua tela</span></>}
            description="Processamento ágil de listas, servidores dedicados e suporte humanizado. Faça seu teste e comprove a diferença."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos HD Player"
            title="Planos acessíveis e sem fidelidade"
            description="Todos os recursos, canais e filmes liberados em qualquer plano — escolha o período mais conveniente para você."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/planos" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Ver detalhes completos dos planos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Ativação do HD Player em 3 passos simples"
            description="Sem equipamentos caros ou antenas. Você só precisa do app instalado e conexão com a internet."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative glass-card rounded-2xl p-7">
                <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <div className="glass-card rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="mx-auto size-8 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                Experimente o <span className="gradient-text">HD Player Grátis</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Solicite seu teste gratuito e teste todos os canais em 4K e som surround diretamente no seu dispositivo antes de assinar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton keyword="Teste Grátis HD Player" label="Quero Testar Grátis" variant="whatsapp" size="lg" />
                <WhatsAppButton keyword="Assinatura HD Player" label="Assinar Agora" variant="primary" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Dúvidas comuns sobre o HD Player"
          />
          <div className="mt-14">
            <FaqAccordion items={HOME_FAQ} />
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Não encontrou sua dúvida?{" "}
              <Link to="/faq" className="text-primary hover:underline">Veja todas as perguntas</Link> ou{" "}
              <Link to="/contato" className="text-primary hover:underline">fale com nosso suporte</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
