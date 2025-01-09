import styles from './styles.module.scss';

export function createTags({ daily, hit, discount, variant }) {

  let wrapperClass = styles.wrapper;
  
  if (variant) {
    wrapperClass += ` ${styles[`wrapper__${variant}`]}`;
  }

  return `
  <div class='${wrapperClass}'>
    ${daily ? `<span class=${styles.wrapper__daily}>Товар дня</span>` : ''}

    ${hit ? `<span class=${styles.wrapper__hit}>Хит</span>` : ''}

    ${discount ? `<span class=${styles.wrapper__discount}>-${discount}%</span>` : ''}
  </div>
  `;
}