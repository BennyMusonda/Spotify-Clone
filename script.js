//GETTING REFERENCES FROM HTML ELEMENTS
const audio = document.getElementById('audio_1');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');

// GRAB AUDIO FILE FROM HTML
const audio_1 = document.getElementById('audio1');

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
