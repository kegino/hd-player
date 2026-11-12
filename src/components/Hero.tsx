import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="HD Player — O melhor player e reprodutor de IPTV em 4K e Full HD"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/65 to-background" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-transparent to-background/70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="size-2 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
          HD Player Ativo — Teste grátis liberado agora
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          HD Player — <span className="gradient-text">O Melhor Player de IPTV</span>
          <span className="block text-foreground">Streaming em 4K Sem Travamentos</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Reprodução ultrarrápida de listas M3U e Xtream Codes na sua Smart TV, TV Box, Fire Stick ou Celular. Grade completa com mais de 30.000 conteúdos, filmes, séries e futebol em 4K.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <WhatsAppButton keyword="Teste Grátis HD Player" label="Fazer Teste Grátis" variant="whatsapp" size="lg" />
          <WhatsAppButton keyword="Assinatura HD Player" label="Conhecer Planos" variant="primary" size="lg" />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1" aria-label="Avaliação 4,9 de 5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold text-gold" aria-hidden="true" />
            ))}
            <span className="ml-2 font-semibold text-foreground">4,9/5</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Mais de <strong className="text-foreground">8.900 usuários</strong> assistindo diariamente com o HD Player
          </p>
        </div>
      </div>
    </section>
  );
}
