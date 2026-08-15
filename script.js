//CALL OUT ELEMENTS BY THEiR ID's
const audio = document.getElementById('nastyc');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('is-playing');
    
    //EVENT LISTENER FOR THE BUTTONS
    if (audio.paused){
        audio.play();
        playBtn.textContent = 'Pause';
    }
    else{
        audio.pause();
        playBtn.textContent = 'Play';
    }
})

