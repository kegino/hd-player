import { createFileRoute } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Wifi, MonitorPlay, Globe, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Benefícios do HD Player — Player de IPTV 4K sem Travamentos";
const DESCRIPTION =
  "Descubra as vantagens do HD Player: reprodução ultrarrápida em 4K, suporte a listas M3U e Xtream Codes, mais de 30.000 canais, EPG dinâmico e suporte diário via WhatsApp.";

const BENEFITS = [
  { icon: Zap, t: "Zero travamentos", d: "Motor otimizado com codec H.265 e servidores com rotas de baixa latência e CDN no Brasil." },
  { icon: Tv, t: "Mais de 30.000 canais", d: "Grade nacional e internacional completa em 4K, Full HD e HD com som multicanal." },
  { icon: Film, t: "Catálogo VOD gigante", d: "Milhares de filmes e séries com lançamentos frequentes, opções dubladas e legendadas." },
  { icon: Trophy, t: "Esportes e futebol 60 FPS", d: "Brasileirão, Champions League, Libertadores, UFC e todos os pay-per-view inclusos." },
  { icon: MonitorPlay, t: "Compatibilidade universal", d: "Funciona em Smart TVs Samsung, LG, Android TV, Fire Stick, TV Box, celulares e PC." },
  { icon: Globe, t: "Xtream Codes e M3U", d: "Suporte nativo aos formatos mais populares do mercado com sincronização de categorias." },
  { icon: Wifi, t: "Estável em horários de pico", d: "Balanceamento de carga inteligente para manter a transmissão fluida em grandes finais." },
  { icon: ShieldCheck, t: "Ativação instantânea", d: "Acesso liberado imediatamente após confirmação via Pix ou cartão pelo WhatsApp." },
  { icon: Headphones, t: "Suporte humano diário", d: "Equipe especializada pronta para orientar na instalação e sanar qualquer dúvida." },
];

export const Route = createFileRoute("/beneficios")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/beneficios" }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Benefícios" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Benefícios HD Player"
          title={<>Tudo o que torna o HD Player a <span className="gradient-text">melhor escolha</span></>}
          description="Tecnologia de ponta pensada para quem exige carregamento instantâneo, nitidez em 4K e facilidade no controle remoto."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <article key={t} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-primary/30">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true" />
          <div className="relative">
            <Sparkles className="mx-auto size-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold">Comprove a estabilidade do HD Player na prática</h2>
            <p className="mt-3 text-muted-foreground">Solicite seu teste gratuito no WhatsApp e assista na sua TV em minutos.</p>
            <div className="mt-6"><WhatsAppButton keyword="Teste HD Player Benefícios" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
