//-----------------------------PROGRESS BAR AND ITS INTERACTIONS---------------------------//

//GETTING REFERENCES FROM HTML ELEMENTS
const audio = document.getElementById('audio_1');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');

//ADDING CLICKING EVENT OF THE SONG
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();

//SWAP ICON FROM PLAY TO PAUSE
        playIcon.classList.remove('fa-circle-play');
        playIcon.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        
//SWAP ICON FROM PAUSE TO PLAY
        playIcon.classList.remove('fa-circle-pause');
        playIcon.classList.add('fa-circle-play');
    }
});

//GET PROGRESS BAR INTERACTIONS FROM HTML
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const progressBar = document.getElementById('progressBar');

//UPDATE TIME ON THE PROGRESS BAR
audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

//SET THE VALUE OF THE SLIDER ONCE THE FILE LOADS
audio.addEventListener('loadedmetadata', () =>{
    progressBar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

//PROGRESS BAR SEEK FUNCTIONALITY
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

//CONVERT TIME TO MINUTES:SECONDS
function formatTime(seconds){
    if (isNaN(seconds)) return "0:00";

const mins = Math.floor(seconds / 60);
const secs= Math.floor(seconds % 60);

const paddedSecs = secs < 10 ? '0' + secs : secs;

return `${mins}:${paddedSecs}`;
}

//REPEAT BUTTON INTERACTION

//----------------------- VOLUME BAR AND ITS INTERACTIONS---------------------//

//GETTING REFERENCES FROM THE HTML ELEMENT
const volumeSlider = document.getElementById('mediaVolume');
const volumeValue = document.getElementById('volumeValue');
const myMedia = document.getElementById('audio_1');

volumeSlider.addEventListener('input', (event) => {
  const currentVolume = event.target.value;
  
  // SHOWS THE CURRENT VOLUME NUMBER
  volumeValue.textContent = currentVolume;
  
  // SETS THE MEDIA VOLUME
  if (myMedia) {
    myMedia.volume = currentVolume / 100;
  }
});

