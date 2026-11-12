import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Política de Privacidade — HD Player";
const DESCRIPTION = "Política de Privacidade do HD Player: compromisso com a proteção e privacidade dos seus dados, em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/politica-de-privacidade" }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} />
      </div>
      <article className="container-page pb-20 prose-content mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: 12 de fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Informações que coletamos</h2>
            <p className="mt-2">Coletamos apenas os dados essenciais para entrega e suporte do serviço: número de WhatsApp para contato, nome de identificação e confirmação da transação gerada pelo gateway de pagamento. Dados bancários e números de cartão são processados diretamente pela instituição financeira e nunca são armazenados por nós.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Uso das informações</h2>
            <p className="mt-2">Seus dados são utilizados exclusivamente para envio das credenciais de acesso ao HD Player, avisos de renovação, orientações de configuração e atendimento de suporte técnico. Jamais compartilhamos ou comercializamos informações pessoais com terceiros.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Segurança dos dados</h2>
            <p className="mt-2">Adotamos padrões modernos de criptografia e proteção de rede para assegurar que suas comunicações e acessos permaneçam confidenciais e protegidos contra acessos não autorizados.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Seus direitos (LGPD)</h2>
            <p className="mt-2">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você possui o direito de solicitar a confirmação, correção ou exclusão definitiva de seus dados a qualquer momento via nosso canal oficial de WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Contato</h2>
            <p className="mt-2">Para qualquer esclarecimento sobre a privacidade dos seus dados, entre em contato com nosso time pelo WhatsApp +55 (11) 93382-1957.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
