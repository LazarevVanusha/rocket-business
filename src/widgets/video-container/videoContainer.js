import styles from './styles.module.scss';

export function createVideoContainer() {
  
  return `
  <div class=${styles.container} >
    <div id="videoBlock" style='position:relative'>
      <img 
        src="/img/video-thumbnail.png" 
        alt="Video Thumbnail" 
        class=${styles.container__thumbnail}
        id="videoThumbnail" 
      />
    </div>
    <button class=${styles.container__playBtn} id="playButton">
    Смотреть видео
    <img src="./icons/play.svg" alt="play"/>
    </button>
  </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const videoBlock = document.getElementById('videoBlock');

  if (playButton) {
    playButton.addEventListener('click', () => {
      const videoURL = 'https://www.youtube.com/embed/FQdaUv95mR8?si=CWJIYvT6yVWdGs1X&autoplay=1';

      const iframe = document.createElement('iframe');
      iframe.src = videoURL;
      iframe.allow = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;

      playButton.style.display = 'none';

      videoBlock.appendChild(iframe);
    });
  } else {
    console.error('Play button not found in the DOM.');
  }
});