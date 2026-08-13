import type { ServiceKey } from "./content";
import { images } from "./images";
import type { ServiceBlock } from "../components/ServiceOverview";
import type { Step, ExtraStepCard } from "../components/HowItWorks";

export type ServicePageData = {
  key: ServiceKey;
  slug: string;
  hero: { title: string; subtitle: string; image: string; breadcrumbLabel: string };
  overview: {
    image: string;
    imageAlt: string;
    heading: string;
    leadParagraph?: string;
    paragraphs: string[];
    blocks: ServiceBlock[];
    closingNote?: string;
  };
  howItWorks: {
    title: string;
    intro?: string;
    steps: Step[];
    extraCard?: ExtraStepCard;
    extraCardPosition?: "first" | "last";
  };
  faq: { q: string; a: string }[];
  finalCta: { title: string; text: string; cta: string };
};

export const servicesContent: Record<ServiceKey, ServicePageData> = {
  bess: {
    key: "bess",
    slug: "bess",
    hero: {
      title: "BESS",
      subtitle: "Armazenamento de energia para máxima eficiência e segurança operacional",
      image: images.portfolio4,
      breadcrumbLabel: "Bess",
    },
    overview: {
      image: images.portfolio3,
      imageAlt: "Sistema de armazenamento de energia BESS instalado ao lado de uma usina solar",
      heading: "Reduza custos no horário ponta, evite ultrapassagens de demanda e garanta operação contínua.",
      paragraphs: [
        "O BESS (Battery Energy Storage System) é a solução ideal para empresas que precisam controlar custos, estabilizar consumo e assegurar continuidade mesmo em situações críticas.",
        "A NEW ENERGIA dimensiona, instala e supervisiona sistemas de baterias de alta performance, integrados à rede ou à geração solar.",
      ],
      blocks: [
        {
          type: "problems",
          heading: "Problemas que o BESS resolve",
          items: [
            {
              title: "Redução de custos no horário ponta",
              description: "Armazena energia em períodos de tarifa baixa e utiliza quando a energia fica mais cara.",
            },
            {
              title: "Evita ultrapassagens de demanda",
              description: "Suporte automático para picos, garantindo previsibilidade na fatura.",
            },
            {
              title: "Operação ininterrupta",
              description: "Mantém cargas essenciais funcionando mesmo durante falhas da concessionária.",
            },
            {
              title: "Estabilidade e qualidade de energia",
              description: "Minimiza quedas, oscilações e variações de tensão.",
            },
          ],
        },
      ],
    },
    howItWorks: {
      title: "Como funciona o projeto",
      steps: [
        {
          number: "01",
          title: "Estudo de consumo e perfil de carga",
          description: "Análise detalhada dos horários, demandas e comportamento energético.",
        },
        {
          number: "02",
          title: "Dimensionamento técnico",
          description: "Definição da capacidade das baterias e arquitetura do sistema.",
        },
        {
          number: "03",
          title: "Projeto executivo e integrações",
          description: "Engenharia completa, compatível com geração solar ou rede.",
        },
        {
          number: "04",
          title: "Instalação e comissionamento",
          description: "Execução com equipes especializadas e protocolos de segurança.",
        },
        {
          number: "05",
          title: "Supervisão contínua",
          description: "Monitoramento, ajustes e otimização da performance.",
        },
      ],
      extraCard: {
        title: "Vantagens diretas",
        items: [
          "Redução real dos custos operacionais;",
          "Controle e estabilidade da demanda contratada;",
          "Maior segurança para processos industriais e críticos;",
          "Integração com sistemas fotovoltaicos;",
          "Equipamentos certificados e de longa vida útil;",
          "Supervisão e suporte técnico da NEW;",
        ],
      },
    },
    faq: [
      {
        q: "O que é exatamente um sistema BESS?",
        a: "É um sistema de baterias de alta performance que armazena energia para uso estratégico — seja para reduzir custos, evitar ultrapassagens de demanda ou garantir operação contínua em caso de falhas da rede.",
      },
      {
        q: "Um BESS pode funcionar mesmo sem energia da concessionária?",
        a: "Sim, o BESS pode manter cargas essenciais operando mesmo durante interrupções da concessionária.",
      },
      {
        q: "O BESS realmente reduz custos no horário ponta?",
        a: "Sim, ele armazena energia mais barata e a utiliza no horário de tarifa mais cara.",
      },
      {
        q: "Como o BESS evita ultrapassagens de demanda?",
        a: "O sistema identifica picos de consumo e complementa a energia da rede automaticamente, evitando multas por ultrapassagem contratada.",
      },
      {
        q: "É possível integrar o BESS com energia solar?",
        a: "Sim, o BESS pode ser integrado a sistemas fotovoltaicos já existentes ou instalado junto com a usina.",
      },
      {
        q: "Qual a vida útil de um sistema BESS?",
        a: "Os equipamentos utilizados têm vida útil média de 10 a 15 anos, dependendo do regime de uso e manutenção.",
      },
      {
        q: "O sistema requer manutenção?",
        a: "Sim, realizamos monitoramento remoto contínuo e manutenções preventivas programadas.",
      },
      {
        q: "Toda empresa pode instalar um BESS?",
        a: "Fazemos uma análise técnica prévia do perfil de consumo para dimensionar corretamente o sistema para cada operação.",
      },
      {
        q: "O BESS pode estabilizar oscilações e quedas de energia?",
        a: "Sim, o sistema minimiza variações de tensão e protege equipamentos sensíveis contra oscilações da rede.",
      },
      {
        q: "Quanto um BESS pode economizar?",
        a: "A economia varia conforme o perfil de consumo, mas projetos bem dimensionados costumam reduzir significativamente os custos na tarifa ponta.",
      },
    ],
    finalCta: {
      title: "Controle total sobre sua energia",
      text: "Solicite uma análise técnica e descubra quanto sua empresa pode economizar com um sistema BESS dimensionado pela NEW ENERGIA.",
      cta: "Solicitar estudo personalizado",
    },
  },

  eficiencia: {
    key: "eficiencia",
    slug: "eficiencia",
    hero: {
      title: "Eficiência Energética",
      subtitle: "Reduza desperdícios e aumente a performance da sua operação.",
      image: images.heroBg,
      breadcrumbLabel: "Eficiência Energética",
    },
    overview: {
      image: images.aboutTeaser,
      imageAlt: "Painel solar com representação de eficiência energética",
      heading: "Eficiência energética para reduzir custos e aumentar performance",
      paragraphs: [
        "A eficiência energética é a forma mais rápida e inteligente de reduzir desperdícios, controlar custos e aumentar a competitividade da sua empresa sem comprometer a operação.",
        "A NEW ENERGIA atua com engenharia aplicada para identificar perdas, corrigir ineficiências e implementar soluções técnicas que geram economia real e previsível, respeitando a rotina e os processos do cliente.",
        "Trabalhamos com análise profunda do consumo, demanda, horário ponta, qualidade de energia e comportamento operacional, entregando resultados mensuráveis.",
      ],
      blocks: [
        {
          type: "checklist",
          heading: "Por que investir em eficiência energética?",
          intro:
            "Empresas que não gerenciam o consumo energético acabam pagando mais do que deveriam, sofrendo com picos de demanda, desperdícios e falta de previsibilidade. Projetos de eficiência energética entregam benefícios diretos como:",
          style: "dot",
          items: [
            "Redução imediata de custos operacionais;",
            "Otimização da demanda contratada;",
            "Maior estabilidade e qualidade da energia;",
            "Melhoria do desempenho dos processos;",
            "Aumento da competitividade e do controle financeiro;",
          ],
        },
      ],
    },
    howItWorks: {
      title:
        "Aplicamos um processo estruturado em 5 etapas para identificar desperdícios, reduzir consumo e aumentar a eficiência energética da sua operação.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico energético completo",
          description: "Levantamento técnico do consumo, cargas, horários, demanda e comportamento energético da operação.",
        },
        {
          number: "02",
          title: "Análise técnica e identificação de perdas",
          description: "Mapeamento de desperdícios, ineficiências e oportunidades reais de economia.",
        },
        {
          number: "03",
          title: "Definição das soluções técnicas",
          description: "Propostas de ações como ajustes operacionais, automação, equipamentos, BESS ou geração própria.",
        },
        {
          number: "04",
          title: "Implementação das melhorias",
          description: "Execução técnica com acompanhamento da equipe de engenharia da NEW ENERGIA.",
        },
        {
          number: "05",
          title: "Monitoramento e otimização contínua",
          description: "Acompanhamento dos resultados e ajustes para garantir a economia projetada.",
        },
      ],
      extraCard: {
        title: "Vantagens diretas",
        items: [
          "Redução real do consumo de energia",
          "Menor impacto de reajustes tarifários",
          "Controle sobre picos e ultrapassagens de demanda",
          "Mais eficiência sem comprometer a produção",
        ],
      },
    },
    faq: [
      {
        q: "O que é eficiência energética na prática?",
        a: "Eficiência energética significa produzir mais — ou o mesmo — consumindo menos energia, por meio de ajustes técnicos, operacionais e tecnológicos, sem comprometer a operação.",
      },
      {
        q: "Minha empresa precisa investir em novos equipamentos?",
        a: "Nem sempre. Muitas melhorias vêm de ajustes operacionais e técnicos antes de qualquer novo investimento em equipamentos.",
      },
      {
        q: "Qual o percentual de economia possível?",
        a: "Projetos de eficiência energética costumam gerar entre 10% e 35% de redução no consumo.",
      },
      {
        q: "Eficiência energética interfere na operação da empresa?",
        a: "Não. As soluções são desenhadas para manter ou melhorar a performance operacional.",
      },
      {
        q: "Esse serviço serve para quais tipos de empresa?",
        a: "Atendemos indústrias, comércios, condomínios e propriedades rurais com qualquer perfil de consumo.",
      },
      {
        q: "A NEW ENERGIA acompanha os resultados após a implementação?",
        a: "Sim, realizamos monitoramento contínuo para garantir que a economia projetada seja mantida ao longo do tempo.",
      },
    ],
    finalCta: {
      title: "Reduza desperdícios e aumente a eficiência da sua operação",
      text: "Solicite um diagnóstico energético e descubra onde sua empresa pode economizar com eficiência energética aplicada.",
      cta: "Solicitar diagnóstico energético",
    },
  },

  desconto: {
    key: "desconto",
    slug: "desconto",
    hero: {
      title: "Energia com desconto",
      subtitle: "Até 20% de desconto na conta de luz todos os meses.",
      image: images.portfolio2,
      breadcrumbLabel: "Energia com Desconto",
    },
    overview: {
      image: images.portfolio3,
      imageAlt: "Conta de luz sobre painel solar, representando economia com energia com desconto",
      heading: "Sua conta de luz pode ser menor já no próximo mês",
      paragraphs: [
        "Pague menos energia sem investimento, sem obras ou sem complicação.",
        "Com a NEW, o desconto vem direto na fatura, de forma simples, segura e previsível.",
        "Você continua usando energia normalmente — só que pagando menos todos os meses.",
      ],
      blocks: [
        {
          type: "checklist",
          heading: "Por que funciona",
          style: "dot",
          items: [
            "Desconto imediato na conta de luz;",
            "Sem investimento inicial;",
            "Sem obras, sem instalação, sem dor de cabeça;",
            "Economia mensal previsível;",
            "Energia limpa e sustentável;",
          ],
        },
        {
          type: "checklist",
          heading: "Ideal para quem quer",
          style: "dot",
          items: ["Reduzir custos fixos rapidamente;", "Melhorar o fluxo de caixa;", "Economizar sem mudar a operação;"],
        },
      ],
    },
    howItWorks: {
      title: "Como funciona a energia com desconto",
      intro: "Garantimos uma transição simples e segura para energia com desconto, com um processo claro em 5 etapas.",
      steps: [
        {
          number: "01",
          title: "Análise de consumo",
          description: "Avaliação do perfil energético e elegibilidade para o modelo de desconto.",
        },
        {
          number: "02",
          title: "Estudo de viabilidade",
          description: "Simulação de economia, valores e condições contratuais.",
        },
        {
          number: "03",
          title: "Alocação de energia",
          description: "Vinculação do cliente a uma usina participante do sistema.",
        },
        {
          number: "04",
          title: "Contrato e ativação",
          description: "Formalização e início do fornecimento com desconto.",
        },
        {
          number: "05",
          title: "Acompanhamento contínuo",
          description: "Gestão técnica, suporte e monitoramento do desempenho.",
        },
      ],
    },
    faq: [
      {
        q: "O que é energia com desconto?",
        a: "Energia com desconto é um modelo onde sua empresa passa a consumir energia proveniente de usinas no mercado livre ou em geração compartilhada, pagando menos do que na tarifa convencional da concessionária, sem necessidade de obras ou investimentos em infraestrutura.",
      },
      {
        q: "Minha empresa precisa instalar equipamentos ou trocar medidor?",
        a: "Não. Na maioria dos casos não há necessidade de obras ou troca de medidor.",
      },
      {
        q: "Existe fidelidade ou risco contratual?",
        a: "O contrato é transparente, com condições claras definidas antes da adesão, sem surpresas.",
      },
      {
        q: "Quanto minha empresa pode economizar?",
        a: "A economia costuma variar entre 15% e 20% na fatura de energia.",
      },
      {
        q: "A energia com desconto é confiável?",
        a: "Sim, é fornecida por usinas regulamentadas e monitoradas, garantindo continuidade e qualidade no fornecimento.",
      },
      {
        q: "Quem pode contratar energia com desconto?",
        a: "Empresas, indústrias e comércios com consumo compatível com o modelo de geração compartilhada.",
      },
      {
        q: "Como começar?",
        a: "Basta enviar sua última fatura de energia para realizarmos a análise de viabilidade gratuita.",
      },
    ],
    finalCta: {
      title: "A NEW cuida de tudo para você.",
      text: "Analisamos sua conta, aplicamos a melhor solução e acompanhamos os resultados. Você só percebe uma coisa: a conta vem menor.",
      cta: "Quero pagar menos energia agora",
    },
  },

  mobilidade: {
    key: "mobilidade",
    slug: "mobilidade",
    hero: {
      title: "Eletroposto",
      subtitle: "Infraestrutura completa para recarga de veículos elétricos",
      image: images.eletropostoHeroServico,
      breadcrumbLabel: "Mobilidade Elétrica",
    },
    overview: {
      image: images.eletropostoOverviewServico,
      imageAlt: "Veículo elétrico carregando com cliente ao fundo",
      heading: "Soluções para empresas, condomínios e frotas — com segurança, gestão e integração com energia solar.",
      paragraphs: [
        "A NEW ENERGIA entrega projetos completos de infraestrutura de recarga para mobilidade elétrica, garantindo capacidade, segurança e eficiência.",
        "Os sistemas podem operar integrados à geração solar, reduzindo custos e permitindo maior autonomia energética.",
      ],
      blocks: [
        {
          type: "infoList",
          heading: "Para quem é indicado",
          items: [
            { title: "Empresas", text: "que desejam oferecer recarga a colaboradores ou clientes." },
            {
              title: "Condomínios",
              text: "que buscam modernizar e atender à demanda crescente por veículos elétricos.",
            },
            { title: "Frotas corporativas", text: "que precisam de estrutura robusta, confiável e escalável." },
          ],
        },
        {
          type: "checklist",
          heading: "O que entregamos",
          items: [
            "Dimensionamento completo da potência necessária;",
            "Infraestrutura elétrica segura e compatível com normas técnicas;",
            "Instalação de carregadores inteligentes (AC e DC);",
            "Gestão e controle de uso, com monitoramento e relatórios;",
            "Integração com sistemas fotovoltaicos para redução de custos;",
            "Suporte e manutenção contínua;",
          ],
        },
      ],
    },
    howItWorks: {
      title: "Como funciona o projeto",
      extraCardPosition: "first",
      extraCard: {
        title: "Benefícios da recarga estruturada",
        items: [
          "Redução de custos com abastecimento;",
          "Mais eficiência no uso da frota elétrica;",
          "Valorização do empreendimento ou condomínio;",
          "Recarga segura e estável, evitando sobrecarga da rede interna;",
          "Preparação para o crescimento de veículos elétricos no Brasil;",
        ],
      },
      steps: [
        {
          number: "01",
          title: "Diagnóstico e análise técnica",
          description: "Estudo da estrutura elétrica e necessidades de recarga.",
        },
        {
          number: "02",
          title: "Dimensionamento da solução",
          description: "Definição da potência, pontos de recarga e modelo de carregadores.",
        },
        {
          number: "03",
          title: "Projeto executivo",
          description: "Toda a engenharia elétrica necessária para instalação e operação segura.",
        },
        {
          number: "04",
          title: "Instalação e configuração",
          description: "Execução completa com equipes especializadas.",
        },
        {
          number: "05",
          title: "Integração com energia solar (opcional)",
          description: "Redução direta no custo da recarga.",
        },
        {
          number: "06",
          title: "Suporte e manutenção",
          description: "Monitoramento, ajustes e atendimento rápido.",
        },
      ],
    },
    faq: [
      {
        q: "É possível instalar carregadores em qualquer empresa ou condomínio?",
        a: "Na maioria dos casos, sim. Antes da instalação, a NEW ENERGIA realiza um estudo de capacidade elétrica para garantir segurança, estabilidade e conformidade com normas.",
      },
      {
        q: "A rede elétrica existente suporta carregadores de veículos elétricos?",
        a: "Fazemos um estudo de capacidade elétrica antes de qualquer instalação para garantir segurança.",
      },
      {
        q: "Quais tipos de carregadores vocês instalam?",
        a: "Trabalhamos com carregadores AC e DC, de diferentes potências, conforme a necessidade de cada projeto.",
      },
      {
        q: "É possível integrar os carregadores com energia solar?",
        a: "Sim, a recarga pode ser total ou parcialmente abastecida por geração fotovoltaica.",
      },
      {
        q: "Quantos carros podem carregar ao mesmo tempo?",
        a: "Depende do dimensionamento do projeto; podemos planejar de um único ponto até estruturas para frotas completas.",
      },
      {
        q: "O condomínio precisa criar vagas exclusivas para carros elétricos?",
        a: "Recomendamos vagas sinalizadas, mas o projeto pode ser adaptado à realidade de cada empreendimento.",
      },
      {
        q: "É preciso uma autorização da concessionária para instalar carregadores?",
        a: "Em alguns casos sim, e a NEW ENERGIA cuida de toda a tratativa técnica junto à concessionária.",
      },
      {
        q: "A infraestrutura de recarga aumenta muito o consumo de energia?",
        a: "O impacto depende do volume de uso; por isso o dimensionamento correto é essencial para evitar sobrecargas.",
      },
      {
        q: "O carregador pode ser de uso privado ou compartilhado?",
        a: "Sim, é possível configurar o acesso conforme a necessidade: privado, compartilhado ou comercial.",
      },
      {
        q: "A NEW ENERGIA oferece manutenção e suporte?",
        a: "Sim, oferecemos suporte técnico contínuo e manutenção preventiva para garantir o pleno funcionamento do sistema.",
      },
    ],
    finalCta: {
      title: "Leve mobilidade elétrica para sua empresa ou condomínio",
      text: "Fale com a NEW ENERGIA e receba um estudo técnico completo para instalar pontos de recarga com segurança e eficiência.",
      cta: "Solicitar estudo personalizado",
    },
  },

  om: {
    key: "om",
    slug: "om",
    hero: {
      title: "O&M",
      subtitle: "Operação e Manutenção de Usinas Solares",
      image: images.portfolio2,
      breadcrumbLabel: "O&M",
    },
    overview: {
      image: images.portfolio5,
      imageAlt: "Técnico da New Energia realizando manutenção em quadro elétrico de usina solar",
      heading: "Cuidado contínuo para o melhor desempenho da sua usina",
      paragraphs: [
        "Com nosso acompanhamento constante, identificamos falhas antes que causem prejuízos. Realizamos inspeções minuciosas, limpeza programada, suporte técnico e ajustes necessários para manter a geração no nível ideal.",
      ],
      blocks: [
        {
          type: "checklist",
          heading: "Inclui:",
          style: "check",
          items: [
            "Monitoramento diário da geração;",
            "Acompanhamento remoto 24/7;",
            "Respostas rápidas a falhas ou quedas de desempenho;",
            "Inspeções periódicas em campo;",
            "Manutenção preventiva;",
            "Manutenção corretiva quando necessário;",
            "Limpeza programada dos módulos;",
            "Relatórios completos de performance e eficiência;",
            "Suporte técnico contínuo;",
          ],
        },
        {
          type: "infoList",
          heading: "Por que contratar O&M da New Energia?",
          intro: "Mais segurança, mais geração, mais retorno financeiro.",
          items: [
            {
              title: "Monitoramento em Tempo Real",
              text: "Identificação instantânea de falhas e perdas de produção.",
            },
            {
              title: "Prevenção de Danos",
              text: "Ações preventivas que evitam prejuízos e prolongam a vida útil do sistema.",
            },
            {
              title: "Atuação Rápida e Efetiva",
              text: "Equipe técnica disponível para diagnóstico e correções.",
            },
            {
              title: "Economia Garantida",
              text: "Um sistema bem cuidado gera mais energia e reduz perdas ao longo do ano.",
            },
            {
              title: "Relatórios e Transparência",
              text: "Informações claras sobre o desempenho da usina, mês a mês.",
            },
          ],
        },
      ],
    },
    howItWorks: {
      title: "Como funciona o projeto",
      steps: [
        {
          number: "01",
          title: "Monitoramento Diário",
          description: "Acompanhamento remoto da operação e identificação imediata de anomalias.",
        },
        {
          number: "02",
          title: "Inspeções Técnicas Programadas",
          description: "Verificação presencial dos módulos, conexões, inversores e estruturas.",
        },
        {
          number: "03",
          title: "Manutenção Preventiva",
          description: "Ações periódicas para evitar falhas: reapertos, testes elétricos, limpeza e avaliação de sombreamento.",
        },
        {
          number: "04",
          title: "Manutenção Corretiva",
          description: "Correção de problemas identificados no monitoramento ou nas visitas em campo.",
        },
        {
          number: "05",
          title: "Análise de Performance",
          description: "Relatórios mensais de produção, eficiência e histórico de geração.",
        },
        {
          number: "06",
          title: "Suporte Técnico Contínuo",
          description: "Canal direto para dúvidas e atendimento prioritário.",
        },
      ],
    },
    faq: [
      {
        q: "O que está incluído no serviço de O&M?",
        a: "Monitoramento diário, inspeções, manutenções, limpeza, relatórios e suporte técnico contínuo.",
      },
      {
        q: "Com que frequência ocorrem as inspeções?",
        a: "Normalmente em ciclos trimestrais ou semestrais, dependendo do porte da usina.",
      },
      {
        q: "O serviço reduz meu risco de falhas?",
        a: "Sim, o monitoramento contínuo e as manutenções preventivas reduzem significativamente o risco de falhas e paradas não planejadas.",
      },
      {
        q: "Vocês atendem usinas instaladas por outras empresas?",
        a: "Sim, mediante uma avaliação técnica prévia do sistema.",
      },
    ],
    finalCta: {
      title: "Garanta a máxima performance da sua usina solar.",
      text: "Entre em contato e solicite um plano de O&M personalizado para a sua operação.",
      cta: "Solicitar Proposta",
    },
  },

  gere: {
    key: "gere",
    slug: "gere",
    hero: {
      title: "Gere sua própria energia",
      subtitle: "com uma usina fotovoltaica da NEW ENERGIA",
      image: images.aboutTeaser,
      breadcrumbLabel: "Gere sua própria energia",
    },
    overview: {
      image: images.portfolio4,
      imageAlt: "Usina fotovoltaica instalada em propriedade rural",
      heading: "Autonomia, economia e tecnologia para empresas, indústrias e produtores rurais.",
      paragraphs: [
        "A NEW ENERGIA projeta, instala e entrega usinas fotovoltaicas de alta performance para quem quer produzir a própria energia com segurança técnica, retorno comprovado e operação simplificada.",
        "Atuamos em todo o ciclo: parecer de acesso, engenharia, construção, homologação e acompanhamento pós-entrega.",
      ],
      blocks: [
        {
          type: "infoList",
          heading: "Para quem é indicado",
          items: [
            {
              title: "Empresas",
              text: "que precisam reduzir custos operacionais e estabilizar o fluxo de caixa;",
            },
            {
              title: "Indústrias",
              text: "que buscam previsibilidade energética e proteção contra aumentos tarifários;",
            },
            { title: "Produtores rurais", text: "que querem reduzir despesas e fortalecer a competitividade;" },
          ],
        },
      ],
    },
    howItWorks: {
      title: "Como funciona o projeto",
      steps: [
        {
          number: "01",
          title: "Análise técnica e financeira",
          description: "Levantamento de consumo, viabilidade e retorno do investimento.",
        },
        {
          number: "02",
          title: "Parecer de acesso",
          description: "Toda a tratativa com a concessionária fica sob responsabilidade da NEW ENERGIA.",
        },
        {
          number: "03",
          title: "Projeto executivo",
          description: "Engenharia completa, garantindo segurança, eficiência e conformidade.",
        },
        {
          number: "04",
          title: "Construção e instalação",
          description: "Execução com equipes especializadas e equipamentos certificados.",
        },
        {
          number: "05",
          title: "Homologação e ativação",
          description: "Processo finalizado junto à concessionária e liberação para operação.",
        },
        {
          number: "06",
          title: "Acompanhamento pós-entrega (Opcional)",
          description: "Monitoramento diário, suporte técnico e manutenção preventiva.",
        },
      ],
      extraCard: {
        title: "Vantagens diretas",
        items: [
          "Economia significativa na fatura de energia;",
          "Autonomia energética e proteção contra reajustes;",
          "Uso de equipamentos premium e engenharia especializada;",
          "Projeto 100% regularizado junto à concessionária e à ANEEL;",
          "Payback rápido e alta durabilidade do sistema;",
        ],
      },
    },
    faq: [
      {
        q: "Quanto uma usina fotovoltaica pode reduzir da minha fatura de energia?",
        a: "A economia costuma variar entre 60% e 95%, dependendo do perfil de consumo, tarifa local e modelo de compensação adotado. A análise técnica da NEW ENERGIA mostra o percentual exato para cada cliente.",
      },
      {
        q: "A usina precisa estar no mesmo local onde minha empresa consome energia?",
        a: "Não necessariamente. É possível operar por autoconsumo remoto, gerando créditos de energia utilizados em outra unidade.",
      },
      {
        q: "Qual é o tempo médio de retorno (payback)?",
        a: "O payback costuma variar entre 3 e 6 anos, dependendo do porte do projeto e do perfil de consumo.",
      },
      {
        q: "A NEW cuida de toda a parte burocrática com a concessionária?",
        a: "Sim, cuidamos de todo o processo, desde o parecer de acesso até a homologação junto à concessionária.",
      },
      {
        q: "A usina exige muita manutenção?",
        a: "A manutenção é simples e, quando preventiva, garante o desempenho máximo do sistema.",
      },
      {
        q: "Posso instalar uma usina maior do que meu consumo atual?",
        a: "Sim, é possível dimensionar a usina considerando um crescimento futuro do consumo.",
      },
      {
        q: "O sistema funciona durante quedas de energia?",
        a: "Usinas conectadas à rede são desligadas automaticamente por segurança durante quedas, salvo quando integradas a sistemas de armazenamento (BESS).",
      },
      {
        q: "Qual é a vida útil de uma usina fotovoltaica?",
        a: "Os módulos fotovoltaicos têm vida útil média de 25 a 30 anos, com garantias de performance do fabricante.",
      },
      {
        q: "A usina precisa de aprovação da ANEEL?",
        a: "Sim, todo o processo de homologação segue a regulamentação da ANEEL, e a NEW ENERGIA conduz essa etapa por completo.",
      },
      {
        q: "Quanto tempo leva para instalar uma usina?",
        a: "Usinas menores levam entre 20 e 40 dias; projetos industriais podem levar mais tempo.",
      },
    ],
    finalCta: {
      title: "Comece a gerar sua própria energia",
      text: "Fale com a NEW ENERGIA e receba um estudo completo de viabilidade técnica e financeira.",
      cta: "Solicitar estudo personalizado",
    },
  },

  usinas: {
    key: "usinas",
    slug: "usinas",
    hero: {
      title: "Usinas de Investimento (Cotas)",
      subtitle: "Invista em energia solar e receba renda mensal previsível.",
      image: images.heroBg,
      breadcrumbLabel: "Usinas de Investimento",
    },
    overview: {
      image: images.portfolio5,
      imageAlt: "Equipe técnica da New Energia instalando painéis solares de usina de investimento",
      heading: "Invista em energia limpa com retorno real e previsível",
      leadParagraph:
        "Renda mensal previsível, retorno atrativo e segurança regulatória. Invista em energia solar com gestão completa da New Energia.",
      paragraphs: [
        "O modelo de investimento em cotas permite que você participe da geração de energia solar sem precisar instalar nada na sua propriedade.",
        'Você adquire uma "fração" (cota) de uma usina e recebe mensalmente os créditos financeiros referentes à produção proporcional da sua parte.',
        "É um investimento seguro, regulado pela ANEEL e administrado de ponta a ponta pela New Energia.",
      ],
      blocks: [
        {
          type: "checklist",
          heading: "Benefícios principais:",
          style: "check",
          items: [
            "Invista em energia solar e receba rentabilidade mensal e previsível;",
            "Retorno de até 24% ao ano",
            "Renda mensal previsível;",
            "Isenção de Imposto de Renda (modelo regulado como autoconsumo remoto);",
            "Ativo físico, real e de baixo risco;",
            "Contrato claro e transparente;",
            "Gestão completa pela New Energia (monitoramento, operação, manutenção e administração);",
            "Regulamentado pela ANEEL (Resolução Normativa vigente);",
            "Energia limpa com impacto sustentável;",
          ],
        },
        {
          type: "infoList",
          heading: "Por que investir com a New Energia?",
          intro: "Gestão completa, segurança regulatória e alta performance na geração.",
          items: [
            {
              title: "Engenharia e gestão especializadas",
              text: "A New Energia administra toda a operação da usina: monitoramento, manutenção, performance e distribuição da receita.",
            },
            {
              title: "Transparência e relatórios mensais",
              text: "Acesso ao desempenho da sua cota e previsibilidade dos pagamentos.",
            },
            {
              title: "Segurança jurídica e regulatória",
              text: "Contratos estruturados dentro das normas da ANEEL.",
            },
            {
              title: "Usinas de alta eficiência",
              text: "Projetos com equipamentos premium, garantindo geração máxima.",
            },
          ],
        },
        {
          type: "highlightBox",
          heading: "Perfeito para quem busca:",
          items: [
            "Renda mensal estável;",
            "Diversificação de portfólio;",
            "Ativo seguro e de baixa volatilidade;",
            "Proteção contra inflação e aumento tarifário;",
            "Investimento sustentável com impacto positivo;",
          ],
        },
      ],
      closingNote:
        "Não é renda variável, não é especulação. É um ativo físico com geração mensurável e previsível.",
    },
    howItWorks: {
      title: "Como funciona o projeto",
      steps: [
        {
          number: "01",
          title: "Aquisição da Cota",
          description: "O investidor escolhe o valor que deseja aplicar e compra uma fração da usina.",
        },
        {
          number: "02",
          title: "Ativação e Registro",
          description: "A cota é vinculada ao CPF ou CNPJ do investidor conforme a regulamentação.",
        },
        {
          number: "03",
          title: "Geração de Energia",
          description: "A usina opera continuamente, gerando créditos financeiros mensais.",
        },
        {
          number: "04",
          title: "Gestão Completa pela New Energia",
          description: "Monitoramento, O&M, administração e performance.",
        },
        {
          number: "05",
          title: "Recebimento de Renda Mensal",
          description: "Você recebe mensalmente o retorno proporcional à sua parte na usina.",
        },
        {
          number: "06",
          title: "Relatórios e Acompanhamento",
          description: "Performance transparente e rendimento previsível.",
        },
      ],
    },
    faq: [
      {
        q: "Esse investimento é seguro?",
        a: "Sim. É um ativo físico real, regulado pela ANEEL e com geração mensurável e previsível.",
      },
      {
        q: "Qual o valor mínimo para investir?",
        a: "O valor mínimo varia conforme a usina disponível; nossa equipe apresenta as opções vigentes durante a consultoria.",
      },
      {
        q: "Existe isenção de imposto?",
        a: "Sim, dentro do modelo de autoconsumo remoto, a renda gerada é isenta de Imposto de Renda.",
      },
      {
        q: "Posso vender minha cota no futuro?",
        a: "Sim, a cota pode ser transferida ou vendida, seguindo os termos contratuais estabelecidos.",
      },
      {
        q: "Preciso instalar algo na minha casa ou empresa?",
        a: "Não. Você participa da geração de energia sem necessidade de obras ou instalação em sua propriedade.",
      },
    ],
    finalCta: {
      title: "Invista em energia limpa e receba renda mensal garantida.",
      text: "Solicite uma simulação personalizada e descubra quanto sua cota pode render.",
      cta: "Solicitar estudo personalizado",
    },
  },
};
