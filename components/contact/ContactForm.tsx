"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";
import { validateContactPayload, type ContactPayload } from "@/lib/contact-validation";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full border-b border-border-strong bg-transparent py-3 text-text-primary placeholder:text-text-muted focus:border-ink transition-colors duration-300 outline-none";

const labelClass = "font-mono text-meta uppercase text-text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const form = new FormData(e.currentTarget);
    const payload: ContactPayload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      projectType: String(form.get("projectType") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
      website: String(form.get("website") || ""),
    };

    const clientErrors = validateContactPayload(payload);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-border py-16">
        <p className="font-display text-h2">Message sent.</p>
        <p className="mt-4 max-w-md text-text-secondary">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-border pt-10" noValidate>
      {/* honeypot — hidden from real users, left empty by them */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" className={`${fieldClass} mt-2`} placeholder="Your name" />
          {errors.name && <p className="mt-2 text-sm text-text-secondary">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" className={`${fieldClass} mt-2`} placeholder="you@company.com" />
          {errors.email && <p className="mt-2 text-sm text-text-secondary">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={`${fieldClass} mt-2 appearance-none`}
          >
            <option value="" disabled>
              Select one
            </option>
            {contact.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-2 text-sm text-text-secondary">{errors.projectType}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Organisation <span className="normal-case text-text-muted">(optional)</span>
          </label>
          <input id="company" name="company" type="text" className={`${fieldClass} mt-2`} placeholder="Optional" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${fieldClass} mt-2 resize-none`}
            placeholder="What are you looking to build?"
          />
          {errors.message && <p className="mt-2 text-sm text-text-secondary">{errors.message}</p>}
        </div>
      </div>

      {serverError && (
        <p className="mt-6 border border-border-strong bg-bg-alt p-4 text-text-secondary">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-10 inline-flex items-center gap-3 bg-ink px-6 py-4 font-mono text-meta uppercase text-white transition-colors duration-300 hover:bg-gray-800 disabled:opacity-60"
      >
        <span>{status === "loading" ? "Sending…" : "Send Message"}</span>
        {status !== "loading" && (
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            &#8599;
          </span>
        )}
      </button>
    </form>
  );
}
