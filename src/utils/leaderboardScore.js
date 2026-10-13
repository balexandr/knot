// Knot's own definition of what counts as winning: total guesses used
// across all three triplets on a perfect clear, lower is better
// (matches the 'asc' sort_direction seeded for 'knot' in
// leaderboard_games). App.jsx only offers this when every triplet was
// actually solved (not just resolved) — a run with any failed triplet
// isn't a real win, same bar useStats.js already uses for streaks.
export function toLeaderboardScore(tripletStates) {
  const totalGuesses = tripletStates.reduce((sum, t) => sum + t.guesses.length, 0)
  return { score: totalGuesses, tiebreak: null, scoreDisplay: `${totalGuesses} guesses` }
}
