// Select DOM Elements
const audioElements = document.querySelectorAll('.audio-files audio');
const playBtn = document.getElementById('playBtn');
const playIcon = playBtn.querySelector('i');
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const shuffleBtn = document.querySelector('.shuffle-btn');
const loopBtn = document.querySelector('.loop-btn');
const progressBar = document.querySelector('.progress');
const volumeBar = document.querySelector('.volume-bar');

// Player State variables
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;

// Initialize the player
let currentAudio = audioElements[currentTrackIndex];
progressBar.value = 0;

// Update Play/Pause UI
function togglePlayPause() {
    if (isPlaying) {
        currentAudio.pause();
        playIcon.classList.replace('fa-circle-pause', 'fa-circle-play');
    } else {
        currentAudio.play().catch(err => console.log("Playback interrupted:", err));
        playIcon.classList.replace('fa-circle-play', 'fa-circle-pause');
    }
    isPlaying = !isPlaying;
}

// Load a specific track
function loadTrack(index) {
    const wasPlaying = isPlaying;
    
    // Stop current track
    currentAudio.pause();
    currentAudio.currentTime = 0;
    
    // Update index and current audio
    currentTrackIndex = index;
    currentAudio = audioElements[currentTrackIndex];
    
    // Reset progress bar
    progressBar.value = 0;
    
    // Maintain playback state
    if (wasPlaying) {
        currentAudio.play().catch(err => console.log(err));
    }
}

// Move to next track
function nextTrack() {
    if (isShuffle) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * audioElements.length);
        } while (randomIndex === currentTrackIndex && audioElements.length > 1);
        loadTrack(randomIndex);
    } else {
        let nextIndex = currentTrackIndex + 1;
        if (nextIndex >= audioElements.length) {
            nextIndex = 0; // Loop back to start of playlist
        }
        loadTrack(nextIndex);
    }
}

// Move to previous track
function prevTrack() {
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) {
        prevIndex = audioElements.length - 1; // Go to end of playlist
    }
    loadTrack(prevIndex);
}

// Event Listeners for Controls
playBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Toggle Shuffle
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle); // Assumes CSS styles .active
});

// Toggle Loop
loopBtn.addEventListener('click', () => {
    isLoop = !isLoop;
    loopBtn.classList.toggle('active', isLoop); // Assumes CSS styles .active
});

// Sync Progress Bar with Audio Time
audioElements.forEach(audio => {
    audio.addEventListener('timeupdate', () => {
        if (audio === currentAudio && audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
        }
    });

    // Handle track ending
    audio.addEventListener('ended', () => {
        if (isLoop) {
            currentAudio.currentTime = 0;
            currentAudio.play();
        } else {
            nextTrack();
        }
    });
});

// Seek Audio using Progress Bar
progressBar.addEventListener('input', () => {
    if (currentAudio.duration) {
        const seekTime = (progressBar.value / 100) * currentAudio.duration;
        currentAudio.currentTime = seekTime;
    }
});

// Adjust Volume
volumeBar.addEventListener('input', () => {
    const volumeValue = volumeBar.value / 100; // HTML ranges are 0-100, Audio volume is 0-1
    audioElements.forEach(audio => {
        audio.volume = volumeValue;
    });
});
