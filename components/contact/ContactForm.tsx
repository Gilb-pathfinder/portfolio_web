"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";
import { validateContactPayload, type ContactPayload } from "@/lib/contact-validation";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ invert = false }: { invert?: boolean }) {
  const fieldClass = invert
    ? "w-full border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/40 focus:border-accent transition-colors duration-300 outline-none"
    : "w-full border-b border-border-strong bg-transparent py-3 text-text-primary placeholder:text-text-muted focus:border-ink transition-colors duration-300 outline-none";

  const labelClass = `font-mono text-meta uppercase ${invert ? "text-white/50" : "text-text-muted"}`;
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
      <div className={`border-t py-16 ${invert ? "border-white/15" : "border-border"}`}>
        <p className={`font-display text-h2 ${invert ? "text-white" : ""}`}>Message sent.</p>
        <p className={`mt-4 max-w-md ${invert ? "text-white/60" : "text-text-secondary"}`}>
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border-t pt-10 ${invert ? "border-white/15" : "border-border"}`}
      noValidate
    >
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
          {errors.name && <p className={`mt-2 text-sm ${invert ? "text-white/60" : "text-text-secondary"}`}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" className={`${fieldClass} mt-2`} placeholder="you@company.com" />
          {errors.email && <p className={`mt-2 text-sm ${invert ? "text-white/60" : "text-text-secondary"}`}>{errors.email}</p>}
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
            <p className={`mt-2 text-sm ${invert ? "text-white/60" : "text-text-secondary"}`}>{errors.projectType}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Organisation{" "}
            <span className={`normal-case ${invert ? "text-white/40" : "text-text-muted"}`}>(optional)</span>
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
          {errors.message && <p className={`mt-2 text-sm ${invert ? "text-white/60" : "text-text-secondary"}`}>{errors.message}</p>}
        </div>
      </div>

      {serverError && (
        <p
          className={`mt-6 border p-4 ${
            invert
              ? "border-white/15 bg-white/5 text-white/70"
              : "border-border-strong bg-bg-alt text-text-secondary"
          }`}
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-10 inline-flex items-center gap-3 disabled:opacity-60"
      >
        <span
          className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${
            invert ? "bg-accent text-ink group-hover:bg-accent-2" : "bg-ink text-white group-hover:bg-gray-800"
          }`}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </span>
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            invert ? "bg-accent text-ink group-hover:bg-accent-2" : "bg-ink text-white group-hover:bg-gray-800"
          }`}
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </button>
    </form>
  );
}
