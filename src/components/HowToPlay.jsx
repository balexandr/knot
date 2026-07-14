import styles from './HowToPlay.module.css';

export default function HowToPlay({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        <h2 className={styles.title}>How to Play</h2>

        <p className={styles.intro}>
          Each day you get 3 word triplets. Find the single word that follows
          all three clues to make a compound word or common phrase.
        </p>

        <div className={styles.example}>
          <div className={styles.exClues}>
            <span className={styles.exClue}>TOOTH</span>
            <span className={styles.exClue}>HAIR</span>
            <span className={styles.exClue}>PAINT</span>
          </div>
          <div className={styles.exArrow}>+</div>
          <div className={styles.exAnswer}>BRUSH</div>
          <div className={styles.exWords}>
            <span>TOOTHBRUSH</span>
            <span>HAIRBRUSH</span>
            <span>PAINTBRUSH</span>
          </div>
        </div>

        <ul className={styles.rules}>
          <li>You have <strong>3 guesses</strong> per triplet</li>
          <li>Solve all 3 to win</li>
          <li>A new puzzle every day</li>
        </ul>

        <div className={styles.legend}>
          <span>🔵 First try</span>
          <span>🟣 Second try</span>
          <span>🟤 Third try</span>
          <span>⚫ Missed</span>
        </div>

        <button className={styles.playBtn} onClick={onClose}>Got it — let's play</button>
      </div>
    </div>
  );
}
