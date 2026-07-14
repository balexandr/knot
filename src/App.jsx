import { useState, useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { useStats } from './hooks/useStats';
import TripletCard from './components/TripletCard';
import ResultScreen from './components/ResultScreen';
import HowToPlay from './components/HowToPlay';
import StatsScreen from './components/StatsScreen';
import styles from './App.module.css';
import { NoodleLogoIcon } from './components/NoodleLogo';
import { GameLogo } from './components/GameLogo';

const HOW_TO_PLAY_KEY = 'knot-how-to-play-seen';

export default function App() {
  const {
    puzzle,
    puzzleNumber,
    dateKey,
    tripletStates,
    gameStatus,
    initialized,
    shakingIdx,
    activeIdx,
    solvedCount,
    submitGuess,
    selectTriplet,
    generateShareText,
    maxGuesses,
  } = useGameState();

  const { stats, winPct, recordGame } = useStats();

  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    try {
      if (!localStorage.getItem(HOW_TO_PLAY_KEY)) setShowHowToPlay(true);
    } catch {}
  }, []);

  const dismissHowToPlay = () => {
    setShowHowToPlay(false);
    try { localStorage.setItem(HOW_TO_PLAY_KEY, '1'); } catch {}
  };

  useEffect(() => {
    if (gameStatus === 'done') {
      recordGame(dateKey, solvedCount, puzzle.triplets.length);
      const t = setTimeout(() => setShowResult(true), 600);
      return () => clearTimeout(t);
    }
  }, [gameStatus]);

  const handleGuess = (text, tripletIdx) => {
    submitGuess(text, tripletIdx);
  };

  const footer = (
    <footer className={styles.footer}>
      <a href="https://noodlegames.co" target="_blank" rel="noopener noreferrer" className={styles.footerLogo}>
        <NoodleLogoIcon size={18} /> NoodleGames
      </a>
      <span className={styles.footerCopy}>© {currentYear} NoodleGames.co</span>
    </footer>
  );

  const Logo = () => (
    <h1 className={styles.logo}>
      <GameLogo />
      <span className={styles.logoKnot}>Knot</span>
    </h1>
  );

  if (!initialized) return null;

  if (!puzzle) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}><Logo /></div>
        </header>
        <div className={styles.noPuzzle}>
          <p>No puzzle for today yet.</p>
          <p className={styles.muted}>Check back tomorrow!</p>
        </div>
        {footer}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Logo />
          {puzzleNumber > 0 && <span className={styles.puzzleNumber}>#{puzzleNumber}</span>}
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton} onClick={() => setShowStats(true)} aria-label="Statistics">
            <svg className={styles.statsIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="6" y="11" width="2.8" height="7" rx="1" fill="currentColor" />
              <rect x="10.6" y="7" width="2.8" height="11" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="15.2" y="4" width="2.8" height="14" rx="1" fill="currentColor" opacity="0.8" />
            </svg>
          </button>
          <button className={styles.iconButton} onClick={() => setShowHowToPlay(true)} aria-label="How to play">?</button>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.prompt}>
          Find the word that follows all three
        </p>

        <div className={styles.triplets}>
          {puzzle.triplets.map((triplet, i) => (
            <TripletCard
              key={i}
              triplet={triplet}
              tState={tripletStates[i]}
              isActive={activeIdx === i}
              isShaking={shakingIdx === i}
              onSubmit={(text) => handleGuess(text, i)}
              onSelect={() => selectTriplet(i)}
              maxGuesses={maxGuesses}
              slotIndex={i}
            />
          ))}
        </div>

        {gameStatus === 'done' && !showResult && (
          <button className={styles.showResultBtn} onClick={() => setShowResult(true)}>
            See results
          </button>
        )}
      </main>

      {showResult && (
        <ResultScreen
          puzzle={puzzle}
          tripletStates={tripletStates}
          puzzleNumber={puzzleNumber}
          solvedCount={solvedCount}
          generateShareText={generateShareText}
          stats={stats}
          winPct={winPct}
          onDismiss={() => setShowResult(false)}
        />
      )}

      {showHowToPlay && <HowToPlay onClose={dismissHowToPlay} />}
      {showStats && <StatsScreen stats={stats} winPct={winPct} onClose={() => setShowStats(false)} />}

      {footer}
    </div>
  );
}
