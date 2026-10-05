"use client";

import { FormEvent, useState } from "react";
import { contact, site, whatsappLink } from "@/lib/content";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type Fields = { name: string; company: string; email: string; phone: string; message: string };
type Status = { kind: "ok" | "error"; text: string } | null;

const inputClass =
  "w-full rounded-lg border border-border-strong bg-white/5 px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-accent transition-colors duration-300 outline-none";

const labelClass = "mb-2 block text-sm text-text-secondary";

/**
 * Matches bugufidigital's own contact form: no backend required — the
 * message is composed client-side and handed to WhatsApp (with a mailto
 * fallback), so it actually works without an email-service API key.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", company: "", email: "", phone: "", message: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState(contact.budgets[0]);
  const [status, setStatus] = useState<Status>(null);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const toggleInterest = (item: string) =>
    setInterests((list) => (list.includes(item) ? list.filter((x) => x !== item) : [...list, item]));

  const compose = () => {
    const lines = [
      `Name: ${fields.name}`,
      fields.company && `Company: ${fields.company}`,
      fields.email && `Email: ${fields.email}`,
      fields.phone && `Phone: ${fields.phone}`,
      interests.length > 0 && `Interested in: ${interests.join(", ")}`,
      `Budget: ${budget}`,
    ].filter(Boolean);
    return ["Hi Gilbert, I'd like to talk about a project.", "", ...lines, "", fields.message].join("\n");
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!fields.name.trim() || !fields.message.trim()) {
      setStatus({ kind: "error", text: "Please add your name and a short message." });
      return;
    }
    window.open(whatsappLink(compose()), "_blank", "noopener,noreferrer");
    setStatus({ kind: "ok", text: "WhatsApp is opening with your message ready to send." });
  }

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Project enquiry"
  )}&body=${encodeURIComponent(compose())}`;

  const inputs: { key: keyof Fields; label: string; placeholder: string; type: string }[] = [
    { key: "name", label: "Name", placeholder: "Your name", type: "text" },
    { key: "company", label: "Company (optional)", placeholder: "Optional", type: "text" },
    { key: "email", label: "Email", placeholder: "you@company.com", type: "email" },
    { key: "phone", label: "Phone (optional)", placeholder: "Optional", type: "tel" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {inputs.map((f) => (
          <div key={f.key}>
            <label className={labelClass} htmlFor={`cf-${f.key}`}>
              {f.label}
            </label>
            <input
              id={`cf-${f.key}`}
              type={f.type}
              placeholder={f.placeholder}
              className={inputClass}
              value={fields[f.key]}
              onChange={set(f.key)}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm text-text-secondary">I&apos;m interested in...</p>
        <div className="flex flex-wrap gap-3">
          {contact.projectTypes.map((item) => (
            <label key={item} className="cursor-pointer">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={interests.includes(item)}
                onChange={() => toggleInterest(item)}
              />
              <span className="block rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary transition-colors duration-200 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm text-text-secondary">Project budget (USD)</p>
        <div className="flex flex-wrap gap-3">
          {contact.budgets.map((b) => (
            <label key={b} className="cursor-pointer">
              <input
                type="radio"
                name="budget"
                className="peer sr-only"
                checked={budget === b}
                onChange={() => setBudget(b)}
              />
              <span className="block rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary transition-colors duration-200 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                {b}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <label className={labelClass} htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="What are you looking to build?"
          className={`${inputClass} resize-none`}
          value={fields.message}
          onChange={set("message")}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button type="submit" className="group inline-flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 group-hover:bg-white">
            Send on WhatsApp
          </span>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition-[transform,background-color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </button>
        <a href={mailHref} className="text-sm text-text-secondary underline decoration-border-strong underline-offset-4 hover:text-text-primary hover:decoration-text-primary">
          or email {site.email}
        </a>
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-5 text-sm ${status.kind === "ok" ? "text-accent" : "text-text-secondary"}`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
