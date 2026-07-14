import { useState, useCallback, useEffect } from 'react';
import puzzles from '../data/puzzles.js';

const STORAGE_KEY = 'knot-game-state';
const EPOCH = '2026-07-14';
const MAX_GUESSES = 3;

function getTodayKey() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
}

function normalize(str) {
  return str.toUpperCase().trim().replace(/[^A-Z]/g, '');
}

function makeFreshTripletStates(count) {
  return Array.from({ length: count }, () => ({
    solved: false,
    failed: false,
    guesses: [],
  }));
}

function loadState(dateKey, tripletCount) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.dateKey !== dateKey) return null;
    if (!saved.tripletStates || saved.tripletStates.length !== tripletCount) return null;
    return saved;
  } catch { return null; }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

function firstUnresolvedIdx(tripletStates) {
  const idx = tripletStates.findIndex(t => !t.solved && !t.failed);
  return idx === -1 ? null : idx;
}

function isDone(tripletStates) {
  return tripletStates.every(t => t.solved || t.failed);
}

export function useGameState() {
  const dateKey = getTodayKey();
  const puzzle = puzzles[dateKey] || null;
  const puzzleNumber = Math.floor((new Date(dateKey) - new Date(EPOCH)) / 86400000) + 1;

  const [tripletStates, setTripletStates] = useState(() =>
    puzzle ? makeFreshTripletStates(puzzle.triplets.length) : []
  );
  const [gameStatus, setGameStatus] = useState('playing');
  const [initialized, setInitialized] = useState(false);
  const [shakingIdx, setShakingIdx] = useState(null);
  // Which triplet is currently open for guessing. Defaults to the first
  // unsolved one, but the player can freely tap into any other unresolved
  // triplet instead — solving order is never enforced.
  const [activeIdx, setActiveIdxState] = useState(() =>
    puzzle ? firstUnresolvedIdx(makeFreshTripletStates(puzzle.triplets.length)) : null
  );

  useEffect(() => {
    if (!puzzle) { setInitialized(true); return; }
    const saved = loadState(dateKey, puzzle.triplets.length);
    if (saved) {
      setTripletStates(saved.tripletStates);
      setGameStatus(saved.gameStatus || 'playing');
      setActiveIdxState(firstUnresolvedIdx(saved.tripletStates));
    } else {
      setActiveIdxState(firstUnresolvedIdx(makeFreshTripletStates(puzzle.triplets.length)));
    }
    setInitialized(true);
  }, [dateKey]);

  // If the triplet the player is currently on gets resolved, hand focus to
  // the next unresolved one as a convenience default (still overridable by
  // clicking any other open triplet).
  useEffect(() => {
    if (activeIdx === null) return;
    const t = tripletStates[activeIdx];
    if (t && (t.solved || t.failed)) {
      setActiveIdxState(firstUnresolvedIdx(tripletStates));
    }
  }, [tripletStates, activeIdx]);

  const selectTriplet = useCallback((idx) => {
    const t = tripletStates[idx];
    if (!t || t.solved || t.failed) return;
    setActiveIdxState(idx);
  }, [tripletStates]);

  useEffect(() => {
    if (!initialized || !puzzle) return;
    saveState({ dateKey, tripletStates, gameStatus });
  }, [tripletStates, gameStatus, initialized]);

  const submitGuess = useCallback((text, tripletIdx) => {
    if (!puzzle || gameStatus !== 'playing') return { result: 'invalid' };

    const triplet = puzzle.triplets[tripletIdx];
    const tState = tripletStates[tripletIdx];
    if (!tState || tState.solved || tState.failed) return { result: 'invalid' };
    if (tState.guesses.length >= MAX_GUESSES) return { result: 'invalid' };

    const isCorrect = normalize(text) === normalize(triplet.answer);

    setTripletStates(prev => {
      const next = prev.map((t, i) => {
        if (i !== tripletIdx) return t;
        const newGuesses = [...t.guesses, text];
        const failed = !isCorrect && newGuesses.length >= MAX_GUESSES;
        return {
          ...t,
          guesses: newGuesses,
          solved: isCorrect,
          failed,
        };
      });

      if (isDone(next)) {
        setGameStatus('done');
      }

      return next;
    });

    if (!isCorrect) {
      setShakingIdx(tripletIdx);
      setTimeout(() => setShakingIdx(null), 500);
      return { result: 'wrong' };
    }

    return { result: 'correct' };
  }, [puzzle, gameStatus, tripletStates]);

  const generateShareText = useCallback(() => {
    if (!puzzle) return '';
    const squares = tripletStates.map(t => {
      if (t.failed) return '🔴';
      const wrong = t.guesses.length - 1;
      if (wrong === 0) return '🟢';
      if (wrong === 1) return '🟡';
      return '🟠';
    }).join(' ');
    const solved = tripletStates.filter(t => t.solved).length;
    return `Knot #${puzzleNumber} 🔗 ${solved}/${puzzle.triplets.length}\n${squares}\nnoodlegames.co`;
  }, [puzzle, tripletStates, puzzleNumber]);

  const solvedCount = tripletStates.filter(t => t.solved).length;

  return {
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
    maxGuesses: MAX_GUESSES,
  };
}
