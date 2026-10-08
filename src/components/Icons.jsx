// Small line-art icon set replacing emoji in Knot's UI. Matches the
// 24x24 viewBox / stroke / currentColor style the rest of the suite
// uses. Share text is NOT touched by this: generateShareText() in
// useGameState.js builds the actual shared result string (🔗 header +
// 🟢🟡🟠🔴 squares), plain text sent via SMS/clipboard, a custom icon
// can't survive that trip, so it stays real Unicode there.
function base(props) {
  return { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true, ...props };
}

export function IconClose({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheckmark({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconXSmall({ size = 11, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconShare({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M12 15V4M12 4l-3.5 3.5M12 4l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Per-triplet result square: first try / second / third / missed,
// replacing the 🟢🟡🟠🔴 emoji grid with real theme-color fills instead
// of whatever color an OS's emoji font happens to render.
export function IconResultSquare({ state, size = 16, ...props }) {
  const colors = {
    first: '#22c55e',
    second: '#eab308',
    third: '#f97316',
    missed: '#ef4444',
  };
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="1" y="1" width="14" height="14" rx="3" fill={colors[state] || colors.missed} />
    </svg>
  );
}

export function IconTrophy({ size = 40, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 5H4.5A2.5 2.5 0 0 0 5 10h2M17 5h2.5A2.5 2.5 0 0 1 19 10h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 14v3.5M9 21h6M10 17.5h4l.6 3.5H9.4l.6-3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function IconThumbsUp({ size = 40, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M8 11v9H5.5A1.5 1.5 0 0 1 4 18.5v-6A1.5 1.5 0 0 1 5.5 11H8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 11l3.2-6.4a1.8 1.8 0 0 1 3.3 1.1L13.8 9H18a2 2 0 0 1 1.9 2.7l-2 6A2 2 0 0 1 16 19H8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMoon({ size = 40, ...props }) {
  return (
    <svg width={size} height={size} {...base(props)}>
      <path d="M19 13.5A7.5 7.5 0 1 1 10.5 5a6 6 0 0 0 8.5 8.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
