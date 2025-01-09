import { createButton } from '../../button/Button';
import { createActions } from '../../create-actions/createActions';
import { createTags } from '../../create-tags/createTags';
import styles from './styles.module.scss';

export function createMediumCard({
  title,
  price,
  imageUrl,
  discount,
  hit,
  daily
}) {

  return `
    <div class=${styles.card}>
      <img src=${imageUrl} alt="${title}" class=${styles.card__img}>

      <div class=${styles.card__header}>
        <h3 class=${styles.card__header__title}>${title}</h3>

        <div class=${styles.card__header__tags}>

          ${createTags({ daily, discount: discount, hit, variant: 'row' })}

        </div>
      </div>
        
        ${createActions()}

      

      <div class=${styles.card__price_action}>  
        <p class=${styles.card__price_action__price}>${price}</p>
        ${createButton({ variant: 'green', pLine: '20px' })}
      </div>

    </div>
  `;
}