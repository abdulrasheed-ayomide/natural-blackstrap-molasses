/**
 * Illustrated jar/bottle visual used across product cards, galleries and hero.
 * Built entirely in SVG so the storefront looks finished without depending
 * on external photography assets — swap for real product photos later by
 * replacing usages of this component with <img> tags.
 */
export default function JarIllustration({ variant = 'jar', className = '', label }) {
  if (variant === 'pouch') {
    return (
      <svg viewBox="0 0 200 240" className={className} role="img" aria-label={label || 'Molasses pouch illustration'}>
        <path d="M40 60 Q100 20 160 60 L155 220 Q100 235 45 220 Z" fill="#8A5636" />
        <path d="M50 90 Q100 65 150 90 L146 205 Q100 218 54 205 Z" fill="#4B2E1F" />
        <rect x="70" y="30" width="60" height="26" rx="6" fill="#D79A4E" />
        <text x="100" y="140" textAnchor="middle" fill="#F4E2C6" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="700">
          100%
        </text>
        <text x="100" y="160" textAnchor="middle" fill="#F4E2C6" fontSize="9" fontFamily="Poppins, sans-serif">
          NATURAL
        </text>
      </svg>
    );
  }

  if (variant === 'jug') {
    return (
      <svg viewBox="0 0 200 240" className={className} role="img" aria-label={label || 'Molasses jug illustration'}>
        <path d="M60 40h50v20h20a10 10 0 0 1 10 10v130a14 14 0 0 1-14 14H54a14 14 0 0 1-14-14V80a10 10 0 0 1 10-10h10z" fill="#6B3E26" />
        <rect x="66" y="90" width="98" height="100" rx="8" fill="#4B2E1F" />
        <rect x="60" y="35" width="50" height="18" rx="4" fill="#D79A4E" />
        <path d="M118 60 h20 a6 6 0 0 1 6 6 v14 h-26z" fill="#8A5636" />
        <text x="115" y="145" textAnchor="middle" fill="#F4E2C6" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="700">
          BLACKSTRAP
        </text>
        <text x="115" y="163" textAnchor="middle" fill="#D79A4E" fontSize="9" fontFamily="Poppins, sans-serif">
          MOLASSES
        </text>
      </svg>
    );
  }

  // default: classic jar
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={label || 'Molasses jar illustration'}>
      <ellipse cx="100" cy="222" rx="48" ry="8" fill="#4B2E1F" opacity="0.15" />
      <path d="M78 26h44v22h6a12 12 0 0 1 12 12v140a16 16 0 0 1-16 16H76a16 16 0 0 1-16-16V60a12 12 0 0 1 12-12h6z" fill="#F4E2C6" />
      <path d="M70 90h60v96a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10z" fill="#6B3E26" />
      <path d="M70 78h60v18H70z" fill="#4B2E1F" />
      <rect x="78" y="22" width="44" height="14" rx="4" fill="#D79A4E" />
      <rect x="66" y="110" width="68" height="46" rx="4" fill="#FFF8F0" />
      <text x="100" y="128" textAnchor="middle" fill="#6B3E26" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="700" letterSpacing="0.5">
        BLACKSTRAP
      </text>
      <text x="100" y="141" textAnchor="middle" fill="#6B3E26" fontSize="8" fontFamily="Poppins, sans-serif">
        MOLASSES
      </text>
      <text x="100" y="151" textAnchor="middle" fill="#D79A4E" fontSize="6.5" fontFamily="DM Sans, sans-serif" letterSpacing="1">
        100% NATURAL
      </text>
    </svg>
  );
}
