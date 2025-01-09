import { createLargeCard } from '../../components/cards/large-card/largeCard';
import { createMediumCard } from '../../components/cards/medium-card/mediumCard';
import { createSmallCard } from '../../components/cards/small-card/smallCard';
import styles from './styles.module.scss';

export function createCardsWrapper() {

  const cardsData = [
    {
      title: 'Горох в стручках, 1 кг',
      price: '570 ₽',
      imageUrl: './img/peas.png',
      discount: 29,
      daily: true
    },
    {
      title: 'Голубика лесная, 200 г',
      price: '140 ₽',
      imageUrl: './img/blueberry.png',
      discount: 31,
      daily: true
    },
    {
      title: 'Морковь мытая, 1 кг',
      price: '140 ₽',
      imageUrl: './img/carrot.png',
      discount: 29,
      daily: true
    },
    {
      title: 'Попкорн солёный, для СВЧ-печи, 120 г',
      price: '160 ₽',
      imageUrl: './img/popcorn.jpeg',
      discount: 29,
      daily: true
    },
    {
      title: 'Эскимо с малиной, 150 г',
      price: '160 ₽',
      imageUrl: './img/ice-cream.jpeg',
      discount: 29,
      daily: true
    },

  ];

  return `
    <div class=${styles.wrapper}>

      <div class=${styles.wrapper__large_cards}>
        ${createLargeCard(cardsData[0])}
      </div>

      <div class=${styles.wrapper__medium_cards}>
        ${cardsData.slice(1, 3).map(createMediumCard).join('')}
      </div>

      <div class=${styles.wrapper__small_cards}>
        <div class=${styles.wrapper__small_cards__container} id="smallCardsContainer">

          ${cardsData.slice(3).map(createSmallCard).join('')}

        </div>

          <div class=${styles.wrapper__small_cards__dots} id="sliderDots">

            ${cardsData.slice(3).map((_, index) => 
              `<button class=${styles.wrapper__small_cards__dots__btn} data-index="${index}"/>
              `).join('')}

          </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const smallCardsContainer = document.getElementById('smallCardsContainer');
  const dots = Array.from(document.querySelectorAll('#sliderDots button'));

  const updateActiveDot = () => {
    const scrollLeft = smallCardsContainer.scrollLeft;
    const scrollWidth = smallCardsContainer.scrollWidth - smallCardsContainer.clientWidth;
    const activeIndex = Math.round((scrollLeft / scrollWidth) * (dots.length - 1));

    dots.forEach((dot, index) => {
      dot.classList.toggle(styles.wrapper__small_cards__dots__btn__active, index === activeIndex);
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const scrollWidth = smallCardsContainer.scrollWidth - smallCardsContainer.clientWidth;
      smallCardsContainer.scrollLeft = (scrollWidth / (dots.length - 1)) * index;
    });
  });

  smallCardsContainer.addEventListener('scroll', updateActiveDot);

  updateActiveDot();
});