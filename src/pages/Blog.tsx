import { Helmet } from "react-helmet-async";
import { PillButton } from "../components/PillButton";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | New Energia</title>
        <meta name="description" content="Conteúdos sobre energia solar, BESS, mobilidade elétrica e eficiência energética da New Energia." />
      </Helmet>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-navy px-5 py-32 text-center lg:px-8">
        <p className="font-heading text-sm font-medium uppercase tracking-wide text-accent">Blog</p>
        <h1 className="mt-4 max-w-2xl font-heading text-3xl font-medium text-white sm:text-4xl">
          Em breve, novidades sobre energia solar e engenharia
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
          Estamos preparando conteúdos técnicos sobre geração distribuída, BESS, mobilidade elétrica e eficiência
          energética. Volte em breve.
        </p>
        <div className="mt-8">
          <PillButton href="/">Voltar para a Home</PillButton>
        </div>
      </section>
    </>
  );
}
