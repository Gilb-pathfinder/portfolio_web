export function ArrowUpRightIcon({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 322 317"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fill={color}
        d="
          M 5,293
          C 0,298 0,307 5,312
          C 10,317 18,318 24,312
          L 254,82

          C 253,102 252,119 253,137
          C 254,157 258,178 267,201
          L 276,226
          C 279,235 288,239 297,236
          C 306,233 310,224 307,215
          C 299,194 294,177 293,158
          C 291,137 293,117 299,97
          C 304,78 311,60 319,35

          C 322,26 318,17 310,12
          C 302,7 294,8 286,13
          C 267,25 249,30 229,30
          C 208,30 187,27 166,22
          C 147,18 128,12 111,5
          C 102,1 93,4 89,12
          C 85,21 90,30 99,34
          C 117,43 137,49 158,54
          C 180,59 204,63 227,65

          L 5,293
          Z
        "
      />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3.5 5.5c0-1.1.9-2 2-2h2.2c.5 0 .9.3 1 .8l1 3.6c.1.4 0 .9-.3 1.2L8 10.5a1 1 0 0 0-.2 1.1 12 12 0 0 0 4.6 4.6 1 1 0 0 0 1.1-.2l1.4-1.4c.3-.3.8-.4 1.2-.3l3.6 1c.5.1.8.5.8 1v2.2c0 1.1-.9 2-2 2h-1C9.8 20.5 3.5 14.2 3.5 6.5v-1Z" />
    </svg>
  );
}

export function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
