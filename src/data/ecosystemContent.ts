import type { IconName } from "../components/Icons";

export type EcosystemNode = {
  key: string;
  title: string;
  description: string;
  icon: IconName;
  href: string;
  external?: boolean;
  x: number;
  y: number;
};

export const ecosystem = {
  eyebrow: "Nosso ecossistema",
  title: "Um ecossistema completo de soluções integradas",
  subtitle:
    "Conectamos engenharia, tecnologia, inovação e conhecimento para transformar energia em resultados reais.",
  hubLabel: "Integração que gera possibilidades.",
  nodes: [
    {
      key: "new-energy",
      title: "New Energy",
      description: "Geração distribuída e soluções energéticas para empresas e residências.",
      icon: "sun",
      href: "/servicos/gere",
      x: 50,
      y: 10,
    },
    {
      key: "new-charged",
      title: "New Charged",
      description: "Eletropostos e mobilidade elétrica para um futuro sustentável.",
      icon: "bolt",
      href: "/servicos/mobilidade",
      x: 88,
      y: 38,
    },
    {
      key: "new-academy",
      title: "New Academy",
      description: "Capacitação e certificações para profissionais do mercado de energia.",
      icon: "academy",
      href: "/#contato",
      x: 73,
      y: 82,
    },
    {
      key: "ekon",
      title: "Ekon Energia",
      description: "Energia por assinatura. Economia garantida na sua conta de luz.",
      icon: "home",
      href: "https://ekonenergia.com.br",
      external: true,
      x: 27,
      y: 82,
    },
    {
      key: "new-finance",
      title: "New Finance",
      description: "Investimentos que geram futuro. Modelos financeiros inteligentes e rentáveis.",
      icon: "trendingUp",
      href: "/#contato",
      x: 12,
      y: 38,
    },
  ] as EcosystemNode[],
  purpose: {
    title: "Nosso propósito",
    text: "Impulsionar o futuro da energia com soluções inteligentes, sustentáveis e acessíveis.",
  },
  features: [
    { label: "Soluções integradas", icon: "battery" as IconName },
    { label: "Tecnologia e inovação", icon: "bolt" as IconName },
    { label: "Sustentabilidade e responsabilidade", icon: "leaf" as IconName },
    { label: "Parceiros em resultados", icon: "trendingUp" as IconName },
  ],
};
