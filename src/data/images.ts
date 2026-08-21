import heroSunset from "../assets/photos/hero-sunset-1920.webp";
import heroPerdigao1920 from "../assets/photos/hero-perdigao-1920.webp";
import plantaPerdigao1200 from "../assets/photos/planta-perdigao-1200.webp";
import plantaUrbana900 from "../assets/photos/planta-urbana-900.webp";
import plantaUrbana480 from "../assets/photos/planta-urbana-480.webp";
import plantaPiumhi900 from "../assets/photos/planta-piumhi-900.webp";
import plantaPiumhi480 from "../assets/photos/planta-piumhi-480.webp";
import paineisCloseup900 from "../assets/photos/paineis-closeup-900.webp";
import paineisCloseup1920 from "../assets/photos/paineis-closeup-1920.webp";
import equipeNew900 from "../assets/photos/equipe-new-900.webp";
import equipeNew1920 from "../assets/photos/equipe-new-1920.webp";
import instalacaoEquipe900 from "../assets/photos/instalacao-equipe-900.webp";
import instalacaoEquipe1920 from "../assets/photos/instalacao-equipe-1920.webp";
import eletropostoHeroInvest1920 from "../assets/photos/eletroposto-hero-invest-1920.webp";
import eletropostoOverviewInvest900 from "../assets/photos/eletroposto-overview-invest-900.webp";
import eletropostoHeroServico1920 from "../assets/photos/eletroposto-hero-servico-1920.webp";
import eletropostoOverviewServico900 from "../assets/photos/eletroposto-overview-servico-900.webp";
import eletropostoCard480 from "../assets/photos/eletroposto-card-480.webp";
import omHero1920 from "../assets/photos/om-hero-1920.webp";
import omOverview900 from "../assets/photos/om-overview-900.webp";
import bessHero1920 from "../assets/photos/bess-hero-1920.webp";
import bessOverview900 from "../assets/photos/bess-overview-900.webp";
import eficienciaHero1920 from "../assets/photos/eficiencia-hero-1920.webp";
import eficienciaOverview900 from "../assets/photos/eficiencia-overview-900.webp";
import founderBreno from "../assets/photos/founder-breno-portrait.webp";
import teamBreno from "../assets/photos/team-breno.webp";
import teamAlessandra from "../assets/photos/team-alessandra.webp";
import teamMariana from "../assets/photos/team-mariana.webp";
import teamNicoli from "../assets/photos/team-nicoli.webp";
import teamAna from "../assets/photos/team-ana.webp";
import teamMonica from "../assets/photos/team-monica.webp";
import teamArthur from "../assets/photos/team-arthur.webp";
import teamPhilippe from "../assets/photos/team-philippe.webp";
import teamJulia from "../assets/photos/team-julia.webp";

export const images = {
  heroBg: heroPerdigao1920,
  heroCardInvest: plantaPiumhi480,
  heroCardEletroposto: eletropostoCard480,
  heroCardDiscount: plantaUrbana480,

  homeAboutTeaser: paineisCloseup900,
  aboutTeaser: plantaUrbana900,
  aboutHero: heroSunset,
  aboutTeam: equipeNew900,
  missionTeam: instalacaoEquipe900,

  finalCta: equipeNew1920,

  portfolio1: plantaPerdigao1200,
  portfolio2: plantaUrbana900,
  portfolio3: paineisCloseup900,
  portfolio4: plantaPiumhi900,
  portfolio5: instalacaoEquipe900,
  portfolio6: plantaUrbana900,

  descontoHero: instalacaoEquipe1920,
  descontoOverview: plantaPiumhi900,
  gereHero: heroSunset,
  gereOverview: instalacaoEquipe900,
  usinasHero: paineisCloseup1920,
  usinasOverview: plantaUrbana900,

  eletropostoHeroInvest: eletropostoHeroInvest1920,
  eletropostoOverviewInvest: eletropostoOverviewInvest900,
  eletropostoHeroServico: eletropostoHeroServico1920,
  eletropostoOverviewServico: eletropostoOverviewServico900,

  omHero: omHero1920,
  omOverview: omOverview900,
  bessHero: bessHero1920,
  bessOverview: bessOverview900,
  eficienciaHero: eficienciaHero1920,
  eficienciaOverview: eficienciaOverview900,

  founder: founderBreno,

  teamBreno,
  teamAlessandra,
  teamMariana,
  teamNicoli,
  teamAna,
  teamMonica,
  teamArthur,
  teamPhilippe,
  teamJulia,
} as const;
