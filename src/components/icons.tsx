type IconProps = { className?: string };
const base = "h-5 w-5";

export function IconBook({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMoonStar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15.5 4.5A7.5 7.5 0 1 0 19.5 16 6 6 0 0 1 15.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M19 3.5 19.6 5l1.5.6-1.5.6L19 7.7l-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" fill="currentColor" />
    </svg>
  );
}

export function IconGlobe({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8s-1.2 5.8-3.4 8c-2.2-2.2-3.4-5-3.4-8s1.2-5.8 3.4-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 5 6v6c0 4.5 3 7.7 7 8.5 4-.8 7-4 7-8.5V6l-7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSpark({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChip({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconUsers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 8a2.5 2.5 0 1 1 0 5M19.5 19a4.5 4.5 0 0 0-4-4.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWallet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M15 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBell({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFile({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLock({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="10.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
