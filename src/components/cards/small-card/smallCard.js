import { createButton } from '../../button/Button';
import { createActions } from '../../create-actions/createActions';
import { createTags } from '../../create-tags/createTags';
import styles from './styles.module.scss';

export function createSmallCard({
  title,
  price,
  imageUrl,
  discount,
  hit,
  daily
}) {
  return `
    <div class=${styles.card}>
      <img src="${imageUrl}" alt="${title}" class=${styles.card__img}>

      <div class=${styles.card__tags}>
        ${createTags({ daily, hit, discount })}
      </div>

        ${createActions()}

      <div class=${styles.card__info}>
        <h3 class=${styles.card__info__title}>${title}</h3>

        <p class=${styles.card__info__price}>${price}</p>
        
        ${createButton({ variant: 'green' })}
      </div>
    </div>
  `;
}