import { useState, type FormEvent } from "react";
import { contactForm } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { PillButton } from "./PillButton";

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export function ContactForm() {
  const scope = useScrollReveal<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" ref={scope} className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div data-reveal className="text-center">
          <h2 className="font-heading text-3xl font-medium text-navy sm:text-4xl">{contactForm.title}</h2>
          <p className="mt-4 text-base text-navy/60">{contactForm.text}</p>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.name}
            </label>
            <input id="name" name="name" type="text" required className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.company}
            </label>
            <input id="company" name="company" type="text" className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.phone}
            </label>
            <input id="phone" name="phone" type="tel" required className={inputClass} />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.email}
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="service" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.service}
            </label>
            <select id="service" name="service" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Selecione uma opção
              </option>
              {contactForm.serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
              {contactForm.fields.message}
            </label>
            <textarea id="message" name="message" rows={5} className={inputClass} />
          </div>
          <div className="sm:col-span-2 flex flex-col items-center gap-4">
            <PillButton as="button" type="submit">
              {contactForm.submit}
            </PillButton>
            {submitted && (
              <p role="status" className="text-sm font-medium text-navy/70">
                Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
