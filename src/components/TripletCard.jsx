import { useState, useEffect, useRef } from 'react';
import styles from './TripletCard.module.css';

const SLOT_CLASSES = ['slot0', 'slot1', 'slot2'];

export default function TripletCard({
  triplet,
  tState,
  isActive,
  isShaking,
  onSubmit,
  onSelect,
  maxGuesses,
  slotIndex = 0,
}) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isActive]);

  useEffect(() => {
    if (tState.solved) setInputValue('');
  }, [tState.solved]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue.trim());
    setInputValue('');
  };

  const statusClass = tState.solved
    ? styles.solved
    : tState.failed
    ? styles.failed
    : isActive
    ? styles.active
    : styles.idle;

  const wrongGuesses = tState.guesses.filter((_, i) => {
    if (tState.solved) return i < tState.guesses.length - 1;
    return true;
  });

  const slotClass = styles[SLOT_CLASSES[slotIndex % SLOT_CLASSES.length]];
  const isSelectable = !isActive && !tState.solved && !tState.failed;

  return (
    <div
      className={`${styles.card} ${slotClass} ${statusClass} ${isShaking ? styles.shaking : ''} ${isSelectable ? styles.selectable : ''}`}
      onClick={isSelectable ? onSelect : undefined}
      role={isSelectable ? 'button' : undefined}
      tabIndex={isSelectable ? 0 : undefined}
      onKeyDown={isSelectable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(); } } : undefined}
    >
      <div className={styles.clues}>
        {triplet.clues.map((clue) => (
          <span key={clue} className={styles.clue}>{clue}</span>
        ))}
        <span className={styles.plus}>+</span>
        <span className={styles.blank}>
          {tState.solved
            ? triplet.answer
            : tState.failed
            ? triplet.answer
            : '?'}
        </span>
      </div>

      {(tState.solved || tState.failed) && (
        <div className={styles.compounds}>
          {triplet.clues.map((clue) => (
            <span key={clue} className={styles.compound}>
              {clue}{triplet.answer}
            </span>
          ))}
        </div>
      )}

      {isSelectable && (
        <p className={styles.selectHint}>Tap to work on this one</p>
      )}

      {isActive && !tState.solved && !tState.failed && (
        <>
          {wrongGuesses.length > 0 && (
            <div className={styles.wrongGuesses}>
              {wrongGuesses.map((g, i) => (
                <span key={i} className={styles.wrongGuess}>✕ {g}</span>
              ))}
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type the connecting word…"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="characters"
              spellCheck="false"
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!inputValue.trim()}
            >
              Guess {tState.guesses.length + 1}/{maxGuesses}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
