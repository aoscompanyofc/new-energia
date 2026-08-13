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
      x: 81,
      y: 25,
    },
    {
      key: "eficiencia",
      title: "Eficiência Energética",
      description: "Redução de custos e otimização do consumo com inteligência.",
      icon: "leaf",
      href: "/servicos/eficiencia",
      x: 89,
      y: 59,
    },
    {
      key: "new-academy",
      title: "New Academy",
      description: "Capacitação e certificações para profissionais do mercado de energia.",
      icon: "academy",
      href: "/#contato",
      x: 67,
      y: 86,
    },
    {
      key: "bess",
      title: "BESS",
      description: "Armazenamento de energia para mais segurança, eficiência e controle.",
      icon: "battery",
      href: "/servicos/bess",
      x: 33,
      y: 86,
    },
    {
      key: "ekon",
      title: "Ekon Energia",
      description: "Energia por assinatura. Economia garantida na sua conta de luz.",
      icon: "home",
      href: "https://ekonenergia.com.br",
      external: true,
      x: 11,
      y: 59,
    },
    {
      key: "new-finance",
      title: "New Finance",
      description: "Investimentos que geram futuro. Modelos financeiros inteligentes e rentáveis.",
      icon: "trendingUp",
      href: "/#contato",
      x: 19,
      y: 25,
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
