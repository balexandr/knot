import { useState, useEffect } from 'react';
import { IconClose, IconCheckmark, IconShare, IconResultSquare, IconTrophy, IconThumbsUp, IconMoon, IconLeaderboard } from './Icons';
import { copyToClipboard } from '../utils/shareAll';
import styles from './ResultScreen.module.css';

function tripletSquareState(tState) {
  if (tState.failed) return 'missed';
  const wrong = tState.guesses.length - 1;
  if (wrong === 0) return 'first';
  if (wrong === 1) return 'second';
  return 'third';
}

export default function ResultScreen({
  puzzle,
  tripletStates,
  puzzleNumber,
  solvedCount,
  generateShareText,
  stats,
  winPct,
  onDismiss,
  onViewLeaderboard,
}) {
  const [copied, setCopied] = useState(false);
  const totalTriplets = puzzle.triplets.length;
  const won = solvedCount === totalTriplets;
  const shareText = generateShareText();

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2500);
      return () => clearTimeout(t);
    }
  }, [copied]);

  const handleShare = async () => {
    // On mobile this pops up the native OS share sheet so the result can be
    // sent straight to a chat app, etc. Desktop browsers don't support
    // navigator.share, so fall back to copying the text (which is also
    // shown in the preview box below for manual copy/paste).
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch {
        // user cancelled the share sheet, or it errored, fall through to copy
      }
    }
    await copyToClipboard(shareText);
    setCopied(true);
  };

  return (
    <div className={styles.overlay} onClick={onDismiss}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onDismiss} aria-label="Close"><IconClose /></button>

        <div className={styles.topSection}>
          <div className={styles.emoji}>
            {won ? <IconTrophy /> : solvedCount >= 2 ? <IconThumbsUp /> : <IconMoon />}
          </div>
          <h2 className={styles.headline}>
            {won ? 'Untangled!' : solvedCount > 0 ? `${solvedCount}/${totalTriplets} solved` : 'Better luck tomorrow'}
          </h2>
          <p className={styles.puzzleNum}>Knot #{puzzleNumber}</p>
        </div>

        <div className={styles.squares}>
          {tripletStates.map((t, i) => (
            <IconResultSquare key={i} state={tripletSquareState(t)} />
          ))}
        </div>

        <div className={styles.answers}>
          {puzzle.triplets.map((triplet, i) => {
            const t = tripletStates[i];
            return (
              <div key={i} className={`${styles.answerRow} ${t.solved ? styles.answerSolved : styles.answerFailed}`}>
                <div className={styles.answerClues}>
                  {triplet.clues.map(c => (
                    <span key={c} className={styles.answerClue}>{c}</span>
                  ))}
                </div>
                <span className={styles.answerWord}>+{triplet.answer}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.gamesPlayed}</span>
            <span className={styles.statLabel}>Played</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{winPct}%</span>
            <span className={styles.statLabel}>Win %</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.currentStreak}</span>
            <span className={styles.statLabel}>Streak</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.maxStreak}</span>
            <span className={styles.statLabel}>Best</span>
          </div>
        </div>

        <div className={styles.sharePreview}>
          <p className={styles.sharePreviewLabel}>Share text</p>
          <div className={styles.sharePreviewBox}>
            {shareText.split('\n').map((line, i) => (
              <span key={i} className={styles.sharePreviewLine}>{line}</span>
            ))}
          </div>
        </div>

        <button className={`${styles.shareBtn} ${copied ? styles.copied : ''}`} onClick={handleShare}>
          {copied ? <><IconCheckmark /> Copied to clipboard</> : <><IconShare /> Share</>}
        </button>

        {won && (
          <button className={styles.leaderboardBtn} onClick={onViewLeaderboard}>
            <IconLeaderboard size={16} /> View today's leaderboard
          </button>
        )}
      </div>
    </div>
  );
}
