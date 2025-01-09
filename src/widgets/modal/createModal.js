import styles from './styles.module.scss';

export function createModal() {

  return `
    <dialog class=${styles.dialog} id="cardDialog">
      <div class=${styles.dialog__header}>
        <h2 class=${styles.dialog__header__title}>Оставьте заявку</h2>
        <button class=${styles.dialog__header__close} id="closeDialogButton">
        <img src="./icons/close.svg" alt="close" />
        </button>
    </div>

    <form class=${styles.dialog__form} id="requestForm">
      <input
        class=${styles.dialog__form__input} 
        type="text"
        id="name"
        name="name" 
        placeholder="Ваше имя*" 
        required />

      <input 
        class=${styles.dialog__form__input} 
        type="text"
        id="phone"
        name="phone"
        placeholder="Номер телефона*"
        required />

        <div class=${styles.dialog__form__submit}>
          <div class=${styles.dialog__form__submit__checkbox}>
            <input
              class=${styles.dialog__form__submit__checkbox__radio}
              type="checkbox"
              id="agreement" 
              name="agreement"
              required />

            <label
              class=${styles.dialog__form__submit__checkbox__label}
              for="agreement"
              >
              Я соглашаюсь на обработку персональных данных
              </label>
          </div>

          <button class=${styles.dialog__form__submit__button} type="submit">Отправить</button>
      </div>

      </form>
    </dialog>

  `;
}