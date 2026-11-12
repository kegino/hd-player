import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Termos de Uso — HD Player";
const DESCRIPTION = "Termos de Uso do HD Player: regras de utilização, condições de acesso e compromissos do usuário.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/termos-de-uso" }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} />
      </div>
      <article className="container-page pb-20 mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: 12 de fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
            <p className="mt-2">Ao acessar o site hdplayer.store ou contratar qualquer plano de acesso do HD Player, você expressa sua plena concordância com as condições aqui estabelecidas e com nossa Política de Privacidade.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Escopo do Serviço</h2>
            <p className="mt-2">O HD Player fornece tecnologia de reprodução de listas IPTV por streaming e acesso à grade digital, com vigência estritamente vinculada ao período do plano contratado (mensal, trimestral, semestral ou anual).</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Utilização Individual e Responsável</h2>
            <p className="mt-2">As credenciais de acesso fornecidas são individuais e intransferíveis. O compartilhamento indevido de conexões além do limite contratado poderá acarretar bloqueio preventivo da linha de acesso.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Pagamentos e Renovação</h2>
            <p className="mt-2">A liberação do serviço ocorre automaticamente após a compensação do pagamento. Nossos planos não possuem renovação compulsória ou fidelidade: a continuidade depende do interesse e nova solicitação do cliente ao término do ciclo.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Suporte Técnico</h2>
            <p className="mt-2">O suporte ao usuário é fornecido diariamente através do canal oficial de WhatsApp, prestando assistência para configuração de reprodutores, solução de dúvidas de rede e ativação de novos aparelhos.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
