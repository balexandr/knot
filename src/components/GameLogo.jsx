export function GameLogo() {
  const C = '#e0932a';

  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" style={{ flexShrink: 0 }}>
      <defs>
        {/*
          Overhand knot: one continuous rope.
          - Left tail rises from bottom-left and goes UNDER the main strand at the crossing.
          - Main loop goes up-left, over the top, down-right, back across to the crossing,
            then exits OVER the left tail as the right tail.
          The mask knocks out the left tail where it passes behind the main strand.
        */}
        <mask id="km">
          <rect width="48" height="48" fill="white" />
          <ellipse cx="19" cy="31" rx="5.5" ry="4" fill="black" transform="rotate(35 19 31)" />
        </mask>
      </defs>

      {/* Left tail — goes UNDER at the crossing */}
      <path
        d="M 11 44 C 12 40 14 36 16 32"
        fill="none" stroke={C} strokeWidth="4.5" strokeLinecap="round"
        mask="url(#km)"
      />

      {/* Main loop + right tail — goes OVER at the crossing */}
      <path
        d="M 16 32
           C 12 26 8 16 14 8
           C 20 0 32 2 36 10
           C 40 18 38 28 34 32
           C 30 36 24 36 20 32
           C 18 28 20 28 24 32
           C 28 36 34 42 37 44"
        fill="none" stroke={C} strokeWidth="4.5" strokeLinecap="round"
      />
    </svg>
  );
}
