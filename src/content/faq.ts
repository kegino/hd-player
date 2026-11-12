export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o HD Player e como funciona?",
    a: "O HD Player é um aplicativo e reprodutor de IPTV de alta performance projetado para carregar listas M3U e Xtream Codes com máxima velocidade e estabilidade. Ele permite assistir a mais de 30.000 canais ao vivo, filmes e séries em 4K, Full HD e HD com som surround e troca instantânea de canais.",
  },
  {
    q: "O HD Player trava ou tem lentidão?",
    a: "Não. O HD Player conta com decodificação por hardware H.265/HEVC e servidores com rotas de baixa latência e CDN distribuída no Brasil. Isso garante que transmissões pesadas, como jogos de futebol e eventos ao vivo em 4K, rodem de forma contínua e sem congelamentos.",
  },
  {
    q: "Em quais aparelhos posso usar o HD Player?",
    a: "O HD Player é compatível com os principais dispositivos do mercado: Smart TVs Samsung (Tizen), LG (webOS), Android TV, Google TV, Fire TV Stick, TV Box, smartphones Android, iPhone (iOS) e computadores.",
  },
  {
    q: "Como faço para testar o HD Player antes de assinar?",
    a: "Liberamos um teste grátis com acesso total a canais em 4K, filmes e séries. Basta clicar no botão de teste ou entrar em contato pelo nosso WhatsApp para receber seu login e passo a passo de ativação imediata.",
  },
  {
    q: "Como recebo o acesso e configuro o HD Player?",
    a: "A ativação é 100% online e automática pelo WhatsApp. Após a confirmação, você recebe sua URL/credenciais Xtream Codes ou M3U junto com instruções em vídeo e suporte guiado para configurar no seu aparelho em menos de 5 minutos.",
  },
  {
    q: "O HD Player oferece suporte ao cliente?",
    a: "Sim! Nosso suporte humano atende todos os dias pelo WhatsApp para tirar dúvidas, auxiliar na instalação do app, configuração da lista de reprodução e renovação da assinatura.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Posso conectar em mais de um aparelho simultaneamente?",
    a: "Cada plano padrão acompanha 1 conexão simultânea. Para assistir em múltiplos cômodos ao mesmo tempo, você pode solicitar telas adicionais diretamente com nossa equipe no WhatsApp.",
  },
  {
    q: "Qual velocidade de internet é recomendada para o HD Player?",
    a: "Recomendamos pelo menos 15 Mbps para canais em Full HD e a partir de 30 Mbps para streaming fluido em 4K. Para Smart TVs e TV Boxes, o uso de cabo Ethernet ou rede Wi-Fi 5 GHz oferece o melhor rendimento.",
  },
  {
    q: "O HD Player suporta EPG (Guia de Programação) e áudio multicanal?",
    a: "Sim. O player possui sincronização automática de EPG em tempo real para você acompanhar a grade de programação, além de seleção de áudio dublado/legendado e suporte a som Dolby.",
  },
  {
    q: "Como faço para renovar minha assinatura do HD Player?",
    a: "A renovação é rápida e sem burocracia via Pix ou cartão. Basta chamar nossa equipe no WhatsApp antes do vencimento do seu plano para manter seus canais e favoritos ativos sem interrupção.",
  },
];
