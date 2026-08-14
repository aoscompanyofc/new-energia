import { team } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div data-reveal className="flex flex-col items-center rounded-2xl bg-navy/[0.03] p-6 text-center ring-1 ring-navy/10">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-heading text-lg font-semibold text-accent">
        {initials(name)}
      </span>
      <p className="mt-4 font-heading text-base font-semibold text-navy">{name}</p>
      <p className="mt-1 text-sm leading-relaxed text-navy/60">{role}</p>
    </div>
  );
}

export function TeamSection() {
  const scope = useScrollReveal<HTMLElement>();

  return (
    <section ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-navy/60">{team.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-medium leading-tight text-navy sm:text-4xl">
            {team.title}
          </h2>
        </div>

        <h3 data-reveal className="mt-14 font-heading text-xl font-semibold text-navy">
          {team.leadershipLabel}
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.leadership.map((person) => (
            <TeamCard key={person.name} name={person.name} role={person.role} />
          ))}
        </div>

        <h3 data-reveal className="mt-16 font-heading text-xl font-semibold text-navy">
          {team.operationalLabel}
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.operational.map((person) => (
            <TeamCard key={person.name} name={person.name} role={person.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
