// Knot's own definition of what counts as winning: total guesses used
// across all three triplets on a perfect clear, lower is better
// (matches the 'asc' sort_direction seeded for 'knot' in
// leaderboard_games). App.jsx only offers this when every triplet was
// actually solved (not just resolved) — a run with any failed triplet
// isn't a real win, same bar useStats.js already uses for streaks.
// Only a handful of possible guess totals though, so ties are common —
// solve time breaks them (also 'asc' in leaderboard_games).
export function toLeaderboardScore(tripletStates, elapsedSeconds) {
  const totalGuesses = tripletStates.reduce((sum, t) => sum + t.guesses.length, 0)
  const guessLabel = `${totalGuesses} guesses`
  if (elapsedSeconds == null) return { score: totalGuesses, tiebreak: null, scoreDisplay: guessLabel }
  const mm = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0')
  const ss = String(elapsedSeconds % 60).padStart(2, '0')
  return { score: totalGuesses, tiebreak: elapsedSeconds, scoreDisplay: `${guessLabel} · ${mm}:${ss}` }
}
