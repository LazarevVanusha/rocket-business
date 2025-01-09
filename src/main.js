import './style.css'
import { createCardsWrapper } from './widgets/cards-wrapper/cardsWrapper.js';
import { createModal } from './widgets/modal/createModal.js';
import { createVideoContainer } from './widgets/video-container/videoContainer.js';
import './hooks/dialogHandler.js'

const app = document.querySelector('#app');

const videoContainer = document.createElement('div');
const cardContainer = document.createElement('main');
const modalContainer = document.createElement('div');

videoContainer.innerHTML = createVideoContainer();
cardContainer.innerHTML = createCardsWrapper();
modalContainer.innerHTML = createModal();

app.appendChild(videoContainer);
app.appendChild(cardContainer)
app.appendChild(modalContainer)