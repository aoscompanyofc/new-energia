import { images } from "./images";
import type { ServiceBlock } from "../components/ServiceOverview";
import type { Step } from "../components/HowItWorks";

export const eletropostoInvestment = {
  slug: "eletroposto",
  hero: {
    title: "Invista em Eletropostos",
    subtitle: "Participe da infraestrutura de recarga elétrica e diversifique seus investimentos.",
    image: images.heroBg,
    breadcrumbLabel: "Investidores",
  },
  overview: {
    image: images.portfolio2,
    imageAlt: "Painéis solares associados à infraestrutura de recarga elétrica",
    heading: "Invista na infraestrutura que vai movimentar a mobilidade elétrica no Brasil",
    leadParagraph:
      "Diversifique seu portfólio participando da implantação e operação de eletropostos administrados pela New Energia.",
    paragraphs: [
      "A frota de veículos elétricos cresce a cada ano no Brasil, e a infraestrutura de recarga ainda é escassa. Ao investir em um eletroposto, você participa desse mercado em expansão sem precisar operar a estrutura no dia a dia.",
      "A New Energia cuida de toda a implantação, gestão e manutenção dos pontos de recarga, repassando ao investidor os resultados operacionais gerados pelo uso da infraestrutura.",
    ],
    blocks: [
      {
        type: "checklist",
        heading: "Por que considerar esse investimento",
        style: "dot",
        items: [
          "Participação em um mercado de mobilidade elétrica em expansão;",
          "Gestão completa da infraestrutura pela New Energia;",
          "Ativo físico, vinculado a um ponto de recarga real;",
          "Acompanhamento do desempenho da operação;",
        ],
      },
      {
        type: "infoList",
        heading: "Como funciona",
        intro: "Um modelo pensado para quem quer participar da mobilidade elétrica sem operar a estrutura.",
        items: [
          {
            title: "Escolha do ponto de investimento",
            text: "Você participa da implantação de um eletroposto em uma localização definida pela New Energia.",
          },
          {
            title: "Implantação e operação",
            text: "A New Energia realiza toda a instalação, homologação e gestão técnica do eletroposto.",
          },
          {
            title: "Acompanhamento de resultados",
            text: "Relatórios de uso e performance são compartilhados periodicamente com o investidor.",
          },
        ],
      },
    ] as ServiceBlock[],
    closingNote:
      "As condições comerciais, valores e formato de participação são apresentados em consultoria individual com a nossa equipe.",
  },
  howItWorks: {
    title: "Como funciona o investimento",
    steps: [
      { number: "01", title: "Consultoria inicial", description: "Apresentamos o modelo de investimento e as condições vigentes." },
      { number: "02", title: "Escolha do ponto", description: "Definição da localização e porte do eletroposto." },
      { number: "03", title: "Formalização", description: "Contratação e formalização das condições de participação." },
      { number: "04", title: "Implantação", description: "A New Energia executa a instalação e homologação técnica." },
      { number: "05", title: "Operação e gestão", description: "Gestão contínua da infraestrutura pela equipe da New Energia." },
      { number: "06", title: "Acompanhamento de resultados", description: "Relatórios periódicos de uso e performance." },
    ] as Step[],
  },
  faq: [
    {
      q: "Como funciona o retorno desse investimento?",
      a: "O retorno está vinculado ao uso e à operação do eletroposto. As condições comerciais específicas são apresentadas em consultoria individual com nossa equipe.",
    },
    {
      q: "Preciso operar o eletroposto no dia a dia?",
      a: "Não. A New Energia realiza toda a gestão técnica e operacional da infraestrutura.",
    },
    {
      q: "Existe algum valor mínimo para investir?",
      a: "As condições e valores variam conforme o projeto disponível; fale com nossa equipe para conhecer as opções vigentes.",
    },
    {
      q: "Esse investimento é regulado?",
      a: "A infraestrutura de recarga segue as normas técnicas aplicáveis ao setor; detalhes contratuais são apresentados durante a consultoria.",
    },
  ],
  finalCta: {
    title: "Quer conhecer as condições desse investimento?",
    text: "Fale com a New Energia e receba mais informações sobre como investir em infraestrutura de recarga elétrica.",
    cta: "Falar com um especialista",
  },
};
