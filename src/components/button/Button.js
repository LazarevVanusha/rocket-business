import styles from './styles.module.scss';

export function createButton({ variant, pLine, index }) {
  return `
 <button 
  class=${styles[variant]}
  style='padding-inline:${pLine}'
  data-index=1
  >
    Оставить заявку
  </button>
  `;
}