import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="Natural Blackstrap Molasses — Home"
    >
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path
          d="M32 6C24 18 16 27 16 39a16 16 0 0 0 32 0c0-12-8-21-16-33z"
          fill="#6B3E26"
        />
        <path
          d="M32 18c-4.8 6.4-9 12-9 20a9 9 0 0 0 18 0c0-8-4.2-13.6-9-20z"
          fill="#D79A4E"
        />
        <path
          d="M40 20c3.5 3 4.5 5.5 3.2 5.8-1.3.3-4-1.6-6-4.4"
          stroke="#F4E2C6"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 44c-3-1-6 .5-6 4 3 .8 6-.6 6-4z"
          fill="#4B2E1F"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-display font-bold text-secondary text-base xs:text-lg tracking-tight">
          Natural Blackstrap
        </span>
      </span>
    </Link>
  );
}
