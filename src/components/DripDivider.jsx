/**
 * Signature visual element for the site: an organic "drip" divider
 * that echoes molasses pouring, used between sections instead of a
 * plain straight rule.
 */
export default function DripDivider({ flip = false, tone = 'accent' }) {
  const fill = tone === 'accent' ? '#F4E2C6' : tone === 'cream' ? '#FFF8F0' : '#6B3E26';

  return (
    <div className={`drip-divider ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,0 C150,32 300,4 450,20 C600,36 750,6 900,18 C1000,26 1100,10 1200,0 L1200,40 L0,40 Z"
          fill={fill}
        />
        <circle cx="220" cy="26" r="3.5" fill={fill} className="animate-drip" />
        <circle cx="620" cy="22" r="3" fill={fill} className="animate-drip" style={{ animationDelay: '0.6s' }} />
        <circle cx="960" cy="16" r="4" fill={fill} className="animate-drip" style={{ animationDelay: '1.2s' }} />
      </svg>
    </div>
  );
}
