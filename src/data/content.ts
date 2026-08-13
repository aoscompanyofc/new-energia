export type ServiceKey =
  | "om"
  | "usinas"
  | "mobilidade"
  | "bess"
  | "desconto"
  | "eficiencia"
  | "gere";

export const whatsapp = {
  number: "5531997328451",
  displayNumber: "(31) 99732-8451",
  message: "Olá! Quero falar com um especialista da New Energia.",
  get link() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
  },
  label: "Fale no WhatsApp",
};

export const nav = {
  links: [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ],
  servicesLabel: "Serviços",
  services: [
    { label: "Usinas de Investimento", href: "/servicos/usinas", key: "usinas" as ServiceKey },
    { label: "BESS", href: "/servicos/bess", key: "bess" as ServiceKey },
    { label: "Mobilidade Elétrica (Eletroposto)", href: "/servicos/mobilidade", key: "mobilidade" as ServiceKey },
    { label: "Energia com Desconto", href: "/servicos/desconto", key: "desconto" as ServiceKey },
    { label: "Operação e Manutenção", href: "/servicos/om", key: "om" as ServiceKey },
    { label: "Eficiência Energética", href: "/servicos/eficiencia", key: "eficiencia" as ServiceKey },
    { label: "Gere sua Própria Energia", href: "/servicos/gere", key: "gere" as ServiceKey },
  ],
  cta: "Falar com Especialista",
};

export const hero = {
  titleLine1: "Engenharia em energia para quem exige",
  titleHighlight: "segurança, economia e autonomia.",
  subtitle:
    "Projetamos, instalamos e operamos soluções completas em geração solar, armazenamento e eficiência energética, com precisão técnica do início ao fim.",
  ctaPrimary: "Invista com a New",
  ctaSecondary: "Fale com um especialista",
  investmentOpportunitiesLabel: "OPORTUNIDADES DE INVESTIMENTO",
  highlightCards: [
    {
      eyebrow: "INVESTIMENTO EM USINA",
      title: "em energia solar",
      highlight: "garanta rentabilidade mensal",
      description: "Usinas de investimento, rentabilidade previsível de 24% ao ano",
      image: "heroCardInvest",
      href: "/servicos/usinas",
      external: false,
    },
    {
      eyebrow: "INVESTIMENTO EM ELETROPOSTO",
      title: "em mobilidade elétrica",
      highlight: "diversifique seu portfólio",
      description: "Participe da infraestrutura de recarga elétrica em expansão",
      image: "heroCardInvest",
      href: "/investidores/eletroposto",
      external: false,
    },
    {
      eyebrow: "DESCONTO EM CONTA",
      title: "sua conta de energia",
      highlight: "mais barata sem investimento",
      description: "Economia de até 20% sem burocracia",
      image: "heroCardDiscount",
      href: "https://ekonenergia.com.br",
      external: true,
    },
  ],
};

export const benefits = {
  eyebrow: "INVISTA COM A NEW",
  title: "Soluções completas para atender sua",
  titleHighlight: "necessidade energética",
  items: [
    {
      key: "bess" as ServiceKey,
      title: "Armazenamento inteligente",
      description:
        "Reduza custos na tarifa ponta e mantenha sua operação funcionando mesmo em quedas de energia.",
      icon: "battery",
    },
    {
      key: "desconto" as ServiceKey,
      title: "Economia sem investimento",
      description: "Pague menos na conta de luz todos os meses, sem obras e sem burocracia.",
      icon: "discount",
    },
    {
      key: "eficiencia" as ServiceKey,
      title: "Menos desperdício, mais resultado",
      description:
        "Identificamos perdas e otimizamos o consumo da sua operação com engenharia aplicada.",
      icon: "efficiency",
    },
    {
      key: "om" as ServiceKey,
      title: "Sua usina sempre no melhor desempenho",
      description:
        "Monitoramento contínuo, manutenção preventiva e resposta rápida a qualquer falha.",
      icon: "maintenance",
    },
    {
      key: "usinas" as ServiceKey,
      title: "Invista e receba renda mensal",
      description:
        "Participe da geração de energia solar e receba retorno financeiro previsível todos os meses.",
      icon: "leaf",
    },
    {
      key: "gere" as ServiceKey,
      title: "Gere sua própria energia",
      description: "Projetos fotovoltaicos completos para indústrias, galpões e propriedades rurais.",
      icon: "sun",
    },
  ],
};

export const about = {
  eyebrow: "Quem somos",
  title: "Como nasceu a New Energia",
  paragraph:
    "Somos formados por uma equipe de engenheiros com experiência real em grandes usinas solares. Unimos rigor técnico, responsabilidade operacional e proximidade com o cliente para entregar projetos que realmente performam — do primeiro estudo até a operação de longo prazo.",
  bullets: [
    "Equipe técnica própria",
    "Conformidade regulatória",
    "Gestão contínua das usinas",
    "Projetos bem dimensionados",
    "Atendimento consultivo",
    "Resultados comprovados",
  ],
  cta: "Conheça nossa história",
};

export const sobrePage = {
  hero: {
    title: "NEW Engenharia e Energia",
    breadcrumb: "Home / Sobre",
  },
  intro: {
    eyebrow: "SOBRE A NEW ENERGIA",
    title: "Energia com Engenharia, Precisão e Segurança",
    paragraphs: [
      "A NEW Engenharia e Energia nasceu da união de profissionais experientes em engenharia, projetos e operação de usinas. Somos uma empresa mineira especializada em geração distribuída, armazenamento, mobilidade elétrica e gestão completa de ativos solares.",
      "Atuamos com responsabilidade técnica, transparência e compromisso real com o desempenho. Nosso foco é entregar soluções consistentes, reguladas e seguras da concepção à operação contínua.",
    ],
  },
  quemSomos: {
    eyebrow: "Quem Somos",
    title: "Especialistas em soluções energéticas completas",
    paragraphs: [
      "A NEW ENERGIA atua na geração distribuída, operação de usinas, BESS, mobilidade elétrica e eficiência energética sempre com um padrão elevado de engenharia.",
      "Nosso compromisso é unir precisão técnica com responsabilidade operacional, garantindo resultados previsíveis e estabilidade energética para empresas, indústrias, produtores rurais e investidores.",
    ],
    impactLabel: "Dados de impacto",
    impactItems: [
      "Usinas de grande porte operadas em MG",
      "Engenharia aplicada em todos os processos",
      "Portfólio sólido com resultados reais",
    ],
    mission: {
      number: "01",
      title: "Nossa Missão",
      text: "Desenvolver e operar soluções energéticas confiáveis, eficientes e seguras, gerando economia real e rentabilidade para empresas e investidores.",
    },
    vision: {
      number: "02",
      title: "Nossa Visão",
      text: "Ser referência nacional em geração distribuída, operação de usinas e soluções de armazenamento, com um portfólio sólido e resultados consistentes.",
    },
  },
  impact: {
    eyebrow: "Impacto e Sustentabilidade",
    title: "Impacto real, resultados mensuráveis",
    paragraph:
      "A NEW ENERGIA contribui para a expansão da energia limpa no Brasil, reduzindo custos energéticos, ampliando a autonomia de empresas e fortalecendo a matriz renovável nacional.",
    listLabel: "Nosso trabalho envolve:",
    items: [
      "Redução de custos energéticos",
      "Operação eficiente de usinas",
      "Armazenamento seguro com BESS",
      "Implementação de infraestrutura de mobilidade elétrica",
    ],
  },
};

export const impactAccordion = {
  title: "Por que empresas e investidores escolhem a",
  titleHighlight: "New?",
  items: [
    {
      title: "Precisão técnica",
      description: "Cada projeto é dimensionado com base em dados reais, não em estimativas genéricas.",
    },
    {
      title: "Transparência total",
      description:
        "Você acompanha cada etapa do projeto com relatórios claros e contato direto com nossa equipe.",
    },
    {
      title: "Experiência em grandes usinas",
      description: "Já operamos plantas de alto desempenho em diversas regiões de Minas Gerais.",
    },
    {
      title: "Segurança regulatória",
      description: "Todos os projetos seguem as normas técnicas e a regulamentação da ANEEL.",
    },
    {
      title: "Suporte pós-entrega",
      description:
        "Nossa relação com o cliente não termina na instalação — continuamos como parceiros técnicos.",
    },
  ],
};

export const clientsCarousel = {
  title: "Empresas que escolheram a NEW",
  logos: [
    "Porto Mineiro de Grãos",
    "Tinta Supermax",
    "Drink Tropical",
    "MRV",
    "Santa Casa de Alfenas",
    "Paramotos",
  ],
};

export const portfolio = {
  eyebrow: "Conheça algumas usinas operadas e entregues pela NEW.",
  title: "Projetos que entregam",
  titleHighlight: "desempenho real",
  cta: "+ Projetos",
  projects: [
    {
      power: "1.600 kWp",
      name: "Usina de investimento (cotas) – Perdigão MG",
      modules: "2.286",
      generation: "219 mil kWh/mês",
      image: "portfolio1",
    },
    {
      power: "703,5 kWp",
      name: "MRV Arquelau – Uberaba MG",
      modules: "2.100",
      generation: "91.000 kWh/mês",
      image: "portfolio2",
    },
    {
      power: "237,6 kWp",
      name: "Porto Mineiro de Grãos – Formiga MG",
      modules: "720",
      generation: "30.888 kWh/mês",
      image: "portfolio3",
    },
    {
      power: "237,6 kWp",
      name: "Porto Mineiro de Grãos – Piumhi MG",
      modules: "720",
      generation: "30.888 kWh/mês",
      image: "portfolio4",
    },
    {
      power: "246,85 kWp",
      name: "Porto Mineiro de Grãos – Passos MG",
      modules: "—",
      generation: "—",
      image: "portfolio5",
    },
    {
      power: "1.073,6 kWp",
      name: "Santa Casa de Alfenas – Alfenas MG",
      modules: "2.440",
      generation: "—",
      image: "portfolio6",
    },
    {
      power: "792 kWp",
      name: "Paramotos – Alfenas MG",
      modules: "1.440",
      generation: "—",
      image: "portfolio1",
    },
    {
      power: "389,48 kWp",
      name: "PMC – Matozinhos MG",
      modules: "856",
      generation: "—",
      image: "portfolio2",
    },
    {
      power: "262,4 kWp",
      name: "Supermax – Córrego Fundo MG",
      modules: "640",
      generation: "—",
      image: "portfolio3",
    },
  ],
};

export const stats = {
  title: "Números que reforçam nossa consistência técnica",
  items: [
    { value: 20, prefix: "+", suffix: "MWp", numberLabel: "", label: "em operação" },
    { value: 100, prefix: "+", suffix: "", numberLabel: "", label: "clientes atendidos" },
    { value: 8, prefix: "+", suffix: "", numberLabel: "", label: "anos de atuação técnica" },
    { value: 100, prefix: "", suffix: "%", numberLabel: "Equipe", label: "técnica" },
  ],
};

export const suppliersCarousel = {
  title: "Trabalhamos com os melhores equipamentos do mercado",
  logos: [
    "Schneider",
    "Solis",
    "Sungrow",
    "Trina Solar",
    "Canadian Solar",
    "Fronius",
    "Growatt",
    "Huawei",
    "JA Solar",
    "Risen",
  ],
};

export const faqData: Record<ServiceKey, { label: string; items: { q: string; a: string }[] }> = {
  usinas: {
    label: "Usinas de Investimento",
    items: [
      {
        q: "Esse investimento é seguro?",
        a: "Sim. É um ativo físico regulado pela ANEEL, com geração de energia mensurável e previsível.",
      },
      {
        q: "Existe isenção de imposto?",
        a: "Sim, dentro do modelo de autoconsumo remoto, a renda gerada é isenta de Imposto de Renda.",
      },
    ],
  },
  bess: {
    label: "BESS",
    items: [
      {
        q: "O sistema funciona durante uma queda de energia?",
        a: "Sim, o BESS pode manter cargas essenciais operando mesmo durante interrupções da concessionária.",
      },
      {
        q: "Reduz mesmo a conta na tarifa ponta?",
        a: "Sim, ele armazena energia mais barata e a utiliza no horário de tarifa mais cara.",
      },
    ],
  },
  mobilidade: {
    label: "Mobilidade Elétrica",
    items: [
      {
        q: "Minha rede elétrica suporta os carregadores?",
        a: "Fazemos um estudo de capacidade elétrica antes de qualquer instalação para garantir segurança.",
      },
      {
        q: "É possível integrar com energia solar?",
        a: "Sim, a recarga pode ser total ou parcialmente abastecida por geração fotovoltaica.",
      },
    ],
  },
  desconto: {
    label: "Energia com Desconto",
    items: [
      {
        q: "Preciso investir em equipamentos?",
        a: "Não. Na maioria dos casos não há necessidade de obras ou troca de medidor.",
      },
      {
        q: "Quanto posso economizar?",
        a: "A economia costuma variar entre 15% e 20% na fatura de energia.",
      },
    ],
  },
  eficiencia: {
    label: "Eficiência Energética",
    items: [
      {
        q: "Isso interfere na minha produção?",
        a: "Não. As soluções são desenhadas para manter ou melhorar a performance operacional.",
      },
      {
        q: "Qual o percentual médio de economia?",
        a: "Projetos de eficiência energética costumam gerar entre 10% e 35% de redução no consumo.",
      },
    ],
  },
  om: {
    label: "O&M",
    items: [
      {
        q: "Vocês atendem usinas instaladas por outras empresas?",
        a: "Sim, mediante uma avaliação técnica prévia do sistema.",
      },
      {
        q: "Com que frequência ocorrem as inspeções?",
        a: "Normalmente em ciclos trimestrais ou semestrais, dependendo do porte da usina.",
      },
    ],
  },
  gere: {
    label: "Gere sua Própria Energia",
    items: [
      {
        q: "Qual o prazo médio de instalação?",
        a: "Usinas menores levam entre 20 e 40 dias; projetos industriais podem levar mais tempo.",
      },
      {
        q: "A usina exige muita manutenção?",
        a: "A manutenção é simples e, quando preventiva, garante o desempenho máximo do sistema.",
      },
    ],
  },
};

export const finalCta = {
  title: "Comece com um diagnóstico técnico gratuito",
  text: "Fale com nossa equipe e descubra como reduzir custos, gerar renda ou aumentar a autonomia energética da sua operação.",
  cta: "Falar com Especialista",
};

export const contactForm = {
  title: "Fale com um especialista",
  text: "Preencha o formulário e nossa equipe entra em contato para entender sua necessidade.",
  fields: {
    name: "Nome",
    company: "Empresa",
    phone: "Telefone",
    email: "E-mail",
    service: "Tipo de serviço desejado",
    message: "Mensagem",
  },
  serviceOptions: [
    { value: "om", label: "O&M" },
    { value: "usinas", label: "Usinas de Investimento" },
    { value: "mobilidade", label: "Mobilidade Elétrica" },
    { value: "bess", label: "BESS" },
    { value: "desconto", label: "Energia com Desconto" },
    { value: "eficiencia", label: "Eficiência Energética" },
    { value: "gere", label: "Gere sua Própria Energia" },
  ],
  submit: "Enviar",
};

export const footer = {
  quickLinksTitle: "Links Rápidos",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Contato", href: "/#contato" },
    { label: "Blog", href: "/blog" },
  ],
  contactTitle: "Informações de contato",
  email: "contato@energianew.com.br",
  phone: "(31) 99732-8451",
  address: "Rua Radeck Muzzi, nº206, Santa Amélia, Belo Horizonte – MG, 31550-380",
  rights: (year: number) => `© ${year} New Energia. Todos os direitos reservados.`,
  privacyPolicy: "Política de Privacidade",
};
