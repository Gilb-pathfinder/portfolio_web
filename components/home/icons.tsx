export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c.6 3.8 1.8 6.4 3.6 7.8 1.8 1.4 4.4 2.2 7.4 2.2-3 0-5.6.8-7.4 2.2C13.8 15.6 12.6 18.2 12 22c-.6-3.8-1.8-6.4-3.6-7.8C6.6 12.8 4 12 1 12c3 0 5.6-.8 7.4-2.2C10.2 8.4 11.4 5.8 12 2Z" />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.5l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function StarRating({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-ink" />
      ))}
    </div>
  );
}

export function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.5 7C6.5 8.2 5 10.4 5 13.2c0 2.1 1.3 3.6 3.2 3.6 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.7-2.6-2.7-.2 0-.4 0-.5.1.2-1.4 1.3-2.6 3-3.3L9.5 7Zm8 0c-3 1.2-4.5 3.4-4.5 6.2 0 2.1 1.3 3.6 3.2 3.6 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.7-2.6-2.7-.2 0-.4 0-.5.1.2-1.4 1.3-2.6 3-3.3L17.5 7Z" />
    </svg>
  );
}

export function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.94 1.94 0 1 0 5.27 7.38 1.94 1.94 0 0 0 5.25 3.5ZM20.5 13.6c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.7V8.5H10.1c.04.94 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.29-.72.95-1.47 2.06-1.47 1.45 0 2.03 1.1 2.03 2.72V20.5h3.38l.02-7.4Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
