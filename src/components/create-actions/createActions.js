import styles from './styles.module.scss';

export function createActions() {
  return `
  <div class=${styles.actions}>
    <button class=${styles.actions__btn}>
      <img src="./icons/favorite.svg" alt="like" />
    </button>
    <button class=${styles.actions__btn}>
      <img src="./icons/view.svg" alt="view" />
    </button>
  </div>
  `;
}