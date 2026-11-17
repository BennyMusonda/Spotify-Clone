'use strict';

const AUDIO_FILES = ['audio/audio_1.mp3', 'audio/audio_2.mp3', 'audio/audio_3.mp3'];

const ARTISTS = [
    {
        id: 'zara',
        name: 'Zara Larason',
        song: 'Big Dreams',
        cover: 'imgs/album-cover.jpg',
        hero: 'imgs/landscape-album-cover.png',
        tint: 'rgba(2, 69, 95, 0.541)'
    },
    {
        id: 'yomaps',
        name: 'Yo Maps',
        song: 'Try Again',
        cover: 'imgs/album-cover9.jpg',
        tint: 'rgba(238, 145, 222, 0.329)'
    },
    {
        id: 'nle',
        name: 'NLE Chopper',
        song: 'Straight Up',
        cover: 'imgs/album-cover2.jpg',
        tint: 'rgba(250, 61, 4, 0.274)'
    },
    {
        id: 'bakwesu',
        name: 'BA Kwesu',
        song: 'Traditional Vibes',
        cover: 'imgs/album-cover3.jpg',
        tint: 'rgba(97, 45, 10, 0.274)'
    },
    {
        id: 'billie',
        name: 'Billie Ilish',
        song: 'Ocean Eyes',
        cover: 'imgs/album-cover4.jpg',
        tint: 'rgba(97, 45, 10, 0.274)'
    },
    {
        id: 'ariana',
        name: 'Ariana Grande',
        song: 'New Chapter',
        cover: 'imgs/album-cover5.jpg',
        tint: 'rgba(2, 69, 95, 0.541)'
    },
    {
        id: 'theweekend',
        name: 'The Weekend',
        song: 'After Hours',
        cover: 'imgs/album-cover6.jpg',
        tint: 'rgba(172, 164, 160, 0.541)'
    },
    {
        id: 'redskin',
        name: 'Red Skin',
        song: 'Skeleton Vibes',
        cover: 'imgs/album-cover7.jpg',
        tint: 'rgba(223, 12, 12, 0.541)'
    },
];

const POPULAR_ARTISTS = [
    {
        name: 'Post Malone',
        cover: 'imgs/album-cover8.jpg'
    },
    {
        name: 'Yo Maps',
        cover: 'imgs/album-cover9.jpg'
    },
    {
        name: 'Yo Maps',
        cover: 'imgs/album-cover10.jpg'
    },
    {
        name: 'Chile One',
        cover: 'imgs/album-cover11.jpg'
    },
    {
        name: 'Modeccaii',
        cover: 'imgs/album-cover12.jpg'
    },
    {
        name: 'Pink Sweat',
        cover: 'imgs/album-cover13.jpg'
    },
    {
        name: 'Khalid',
        cover: 'imgs/album-cover14.jpg'
    },
    {
        name: 'Diamond',
        cover: 'imgs/album-cover15.jpg'
    },
];

const ALBUMS = [
    {
        name: 'Alick Nkhata',
        title: 'Shalapo',
        cover: 'imgs/albumcover.jpg'
    },
    {
        name: 'The Call',
        title: 'Precious',
        cover: 'imgs/albumcover1.jpg'
    },
    {
        name: 'Daev',
        title: 'Moon Light',
        cover: 'imgs/albumcover2.jpg'
    },
    {
        name: 'Diana',
        title: 'Imole',
        cover: 'imgs/albumcover3.jpg'
    },
    {
        name: 'Jake',
        title: 'Time Of My Life',
        cover: 'imgs/albumcover4.jpg'
    },
    {
        name: 'Mino',
        title: 'Be Fruitful',
        cover: 'imgs/albumcover5.jpg'
    },
    {
        name: 'Yoleria',
        title: 'Ellen',
        cover: 'imgs/albumcover6.jpg'
    },
    {
        name: 'Piramid',
        title: 'Rainbows',
        cover: 'imgs/albumcover7.jpg'
    },
];
const LIBRARY = [
    {
        title: 'Liked Songs',
        cover: 'imgs/albumcover6.jpg'
    },
    {
        title: 'Twilight',
        cover: 'imgs/albumcover1.jpg'
    },
    {
        title: 'Daeve',
        cover: 'imgs/albumcover2.jpg'
    },
    {
        title: 'Imole',
        cover: 'imgs/albumcover3.jpg'
    },
    {
        title: 'Blended',
        cover: 'imgs/albumcover4.jpg'
    },
];
const ARTIST_TRACKS = [
    {
        title: 'Yo Maps',
        cover: 'imgs/album-cover1.jpg'
    },
    {
        title: 'Daev',
        cover: 'imgs/album-cover2.jpg'
    },
    {
        title: 'Kambenja',
        cover: 'imgs/album-cover3.jpg'
    },
    {
        title: 'Alex J.',
        cover: 'imgs/album-cover4.jpg'
    },
    {
        title: 'Red Ling',
        cover: 'imgs/album-cover5.jpg'
    },
    {
        title: 'John Wick',
        cover: 'imgs/album-cover6.jpg'
    },
    {
        title: 'Chile One',
        cover: 'imgs/album-cover7.jpg'
    },
    {
        title: 'Mark Boston',
        cover: 'imgs/album-cover8.jpg'
    },
];
const DEFAULT_TRACK = {
    key: 'default-0',
    title: 'Zulu Man',
    artist: 'Nasty C',
    cover: 'imgs/playingsong.png',
    src: AUDIO_FILES[0]
};

const $  = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
}
const makeTrack = (group, index, title, artist, cover) => ({
    key: `${group}-${index}`,
    title,
    artist,
    cover,
    src: AUDIO_FILES[index % AUDIO_FILES.length],
});
const QUEUES = {
    trending: ARTISTS.map((a, i) => makeTrack('trending', i, a.song, a.name, a.cover)),
    artists:  POPULAR_ARTISTS.map((a, i) => makeTrack('artists', i, 'Top Track', a.name, a.cover)),
    albums:   ALBUMS.map((a, i) => makeTrack('albums', i, a.title, a.name, a.cover)),
    artist:   [],
};

let viewedArtist = null; 

function cardHTML({ queue, index, title, subtitle, cover, variant, href }) {
    const image = `<img src="${cover}" alt="${title}" loading="lazy">`;
    return `
        <article class="card card--${variant}" data-key="${queue}-${index}">
            <div class="card-cover">
                ${href ? `<a href="${href}">${image}</a>` : image}
                <button class="card-play" data-queue="${queue}" data-index="${index}" aria-label="Play ${title}">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
            <h3>${title}</h3>
            <p>${subtitle}</p>
        </article>`;
}

function renderHome() {
    $('#trendingSongs').innerHTML = ARTISTS.map((a, i) => cardHTML({
        queue: 'trending', index: i, title: a.name, subtitle: a.song, cover: a.cover, variant: 'song', href: `#/artist/${a.id}`,
    })).join('');

    $('#popularArtists').innerHTML = POPULAR_ARTISTS.map((a, i) => cardHTML({
        queue: 'artists', index: i, title: a.name, subtitle: 'Artist', cover: a.cover, variant: 'artist',
    })).join('');

    $('#trendingAlbums').innerHTML = ALBUMS.map((a, i) => cardHTML({
        queue: 'albums', index: i, title: a.name, subtitle: a.title, cover: a.cover, variant: 'album',
    })).join('');
}

function renderLibrary() {
    $('#libraryList').innerHTML = LIBRARY.map((item) => `
        <li class="library-item">
            <img src="${item.cover}" alt="${item.title} cover">
            <span>${item.title}</span>
        </li>`).join('');
}

function renderArtist(artist) {
    QUEUES.artist = ARTIST_TRACKS.map((t, i) => makeTrack(`artist-${artist.id}`, i, t.title, artist.name, t.cover));

    const hero = $('#artistHero');
    hero.src = artist.hero || artist.cover;
    hero.alt = `${artist.name} cover`;
    $('#artistName').textContent = artist.name;
    $('#artistBody').style.setProperty('--tint', artist.tint);

    $('#artistTracks').innerHTML = QUEUES.artist.map((t, i) => `
        <li>
            <button class="track" data-key="${t.key}" data-queue="artist" data-index="${i}">
                <span class="track-num">${i + 1}</span>
                <img src="${t.cover}" alt="">
                <span class="track-title">${t.title}</span>
            </button>
        </li>`).join('');
}

const audio = new Audio();
audio.preload = 'metadata';

const state = {
    queue: [],
    index: 0,
    current: null,
    shuffle: false,
    repeat: 'off'
};
const REPEAT_MODES = ['off', 'all', 'one'];

const ui = {
    cover: $('#npCover'), title: $('#npTitle'), artist: $('#npArtist'),
    playBtn: $('#playBtn'), playIcon: $('#playIcon'), repeatBtn: $('#repeatBtn'),
    currentTime: $('#currentTime'), duration: $('#duration'), progress: $('#progressBar'),
    volumeSlider: $('#volumeSlider'), volumeValue: $('#volumeValue'), volumeIcon: $('#volumeIcon'),
};

function loadTrack(index) {
    state.index = index;
    state.current = state.queue[index];
    const track = state.current;

    audio.src = track.src;
    ui.cover.src = track.cover;
    ui.cover.alt = `${track.title} cover`;
    ui.title.textContent = track.title;
    ui.artist.textContent = track.artist;
    ui.progress.value = 0;
    ui.currentTime.textContent = '0:00';
    ui.duration.textContent = '0:00';

    syncActive();
    updateMediaSession();
}

function play() {
    return audio.play().catch(() => {});
}

function togglePlay() {
    if (audio.paused) play(); else audio.pause();
}
function playFrom(queueName, index) {
    const queue = QUEUES[queueName];
    const sameTrack = state.current && state.current.key === queue[index].key;

    state.queue = queue;
    if (sameTrack) {
        state.index = index;
        togglePlay();
    } else {
        loadTrack(index);
        play();
    }
}
function nextIndex(auto) {
    const total = state.queue.length;
    if (state.shuffle && total > 1) {
        let random;
        do { random = Math.floor(Math.random() * total); } while (random === state.index);
        return random;
    }
    if (state.index + 1 < total) return state.index + 1;
    return auto && state.repeat === 'off' ? -1 : 0;
}

function skipNext(auto = false) {
    const next = nextIndex(auto);
    if (next === -1) {
        loadTrack(0);
        return;
    }
    loadTrack(next);
    play();
}

function skipPrevious() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    loadTrack((state.index - 1 + state.queue.length) % state.queue.length);
    play();
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    $$('.js-shuffle').forEach((btn) => {
        btn.classList.toggle('is-on', state.shuffle);
        btn.setAttribute('aria-pressed', String(state.shuffle));
    });
}

function cycleRepeat() {
    state.repeat = REPEAT_MODES[(REPEAT_MODES.indexOf(state.repeat) + 1) % REPEAT_MODES.length];
    audio.loop = state.repeat === 'one';
    ui.repeatBtn.dataset.mode = state.repeat;
    ui.repeatBtn.classList.toggle('is-on', state.repeat !== 'off');
    ui.repeatBtn.setAttribute('aria-label', `Repeat: ${state.repeat}`);
}

function syncVolume() {
    const level = audio.muted ? 0 : audio.volume;
    const icon = level === 0 ? 'fa-volume-xmark' : level < 0.5 ? 'fa-volume-low' : 'fa-volume-high';
    ui.volumeIcon.className = `fa-solid ${icon}`;
    ui.volumeValue.textContent = audio.muted ? 0 : ui.volumeSlider.value;
}
function syncActive() {
    const playing = !audio.paused;
    const currentKey = state.current ? state.current.key : null;

    $$('[data-key]').forEach((el) => {
        const active = el.dataset.key === currentKey;
        el.classList.toggle('is-active', active);
        const icon = $('.card-play i', el);
        if (icon) icon.className = `fa-solid ${active && playing ? 'fa-pause' : 'fa-play'}`;
    });

    if (viewedArtist) {
        const ownTrack = currentKey && currentKey.startsWith(`artist-${viewedArtist.id}-`);
        $('#artistPlay i').className = `fa-solid ${ownTrack && playing ? 'fa-pause' : 'fa-play'}`;
    }
}

function syncPlayButton() {
    const playing = !audio.paused;
    ui.playIcon.className = `fa-solid ${playing ? 'fa-circle-pause' : 'fa-circle-play'}`;
    ui.playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    syncActive();
}

function updateMediaSession() {
    if (!('mediaSession' in navigator) || !state.current) return;
    const { title, artist, cover } = state.current;
    navigator.mediaSession.metadata = new MediaMetadata({
        title, artist, artwork: [{ src: new URL(cover, location.href).href }],
    });
}

function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.setActionHandler('play', play);
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
    navigator.mediaSession.setActionHandler('previoustrack', skipPrevious);
    navigator.mediaSession.setActionHandler('nexttrack', () => skipNext());
}

function setupPlayer() {
    audio.addEventListener('play', syncPlayButton);
    audio.addEventListener('pause', syncPlayButton);
    audio.addEventListener('ended', () => skipNext(true));
    audio.addEventListener('loadedmetadata', () => {
        ui.progress.max = audio.duration;
        ui.duration.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('timeupdate', () => {
        ui.progress.value = audio.currentTime;
        ui.currentTime.textContent = formatTime(audio.currentTime);
    });
    ui.playBtn.addEventListener('click', togglePlay);
    $('#nextBtn').addEventListener('click', () => skipNext());
    $('#prevBtn').addEventListener('click', skipPrevious);
    ui.repeatBtn.addEventListener('click', cycleRepeat);
    ui.progress.addEventListener('input', () => {
        audio.currentTime = Number(ui.progress.value);
        ui.currentTime.textContent = formatTime(audio.currentTime);
    });
    ui.volumeSlider.addEventListener('input', () => {
        audio.muted = false;
        audio.volume = ui.volumeSlider.value / 100;
        syncVolume();
    });
    $('#muteBtn').addEventListener('click', () => {
        audio.muted = !audio.muted;
        syncVolume();
    });
    audio.volume = ui.volumeSlider.value / 100;
    syncVolume();
    $('#fullscreenBtn').addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(() => {});
    });
    $('#artistPlay').addEventListener('click', () => {
        const ownTrack = state.current && viewedArtist && state.current.key.startsWith(`artist-${viewedArtist.id}-`);
        if (ownTrack) togglePlay(); else playFrom('artist', 0);
    });
    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-queue]');
        if (trigger) playFrom(trigger.dataset.queue, Number(trigger.dataset.index));
        if (event.target.closest('.js-shuffle')) toggleShuffle();
    });
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && event.target === document.body) {
            event.preventDefault();
            togglePlay();
        }
    });

    setupMediaSession();
    state.queue = [DEFAULT_TRACK, ...QUEUES.trending];
    loadTrack(0);
}

function filterCards() {
    const query = $('#searchInput').value.trim().toLowerCase();
    let visibleTotal = 0;

    $$('.shelf').forEach((shelf) => {
        let visible = 0;
        $$('.card', shelf).forEach((card) => {
            const match = card.textContent.toLowerCase().includes(query);
            card.hidden = !match;
            if (match) visible++;
        });
        shelf.hidden = visible === 0;
        visibleTotal += visible;
    });

    $('#noResults').hidden = visibleTotal > 0;
}

function setupSearch() {
    $('#searchInput').addEventListener('input', () => {
        if (viewedArtist) location.hash = '#/';
        filterCards();
    });
    $('#searchForm').addEventListener('submit', (event) => {
        event.preventDefault();
        filterCards();
    });
}

function setupPreloader() {
    const preloader = $('#preloader');
    let hideTimer;

    function showPreloader() {
        preloader.classList.remove('is-hidden');
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => preloader.classList.add('is-hidden'), 5000);
    }
    showPreloader();
    $('.logo').addEventListener('click', (event) => {
        event.preventDefault();
        if (location.hash !== '#/') location.hash = '#/';
        showPreloader();
    });
}

function route() {
    const [, page, id] = location.hash.split('/');
    viewedArtist = page === 'artist' ? ARTISTS.find((a) => a.id === id) || null : null;

    document.body.dataset.view = viewedArtist ? 'artist' : 'home';
    $('#homeView').hidden = Boolean(viewedArtist);
    $('#artistView').hidden = !viewedArtist;
    document.title = viewedArtist ? `${viewedArtist.name} | Sporty` : 'Sporty';

    if (viewedArtist) renderArtist(viewedArtist);
    $('#content').scrollTop = 0;
    syncActive();
}

function init() {
    setupPreloader();
    renderHome();
    renderLibrary();
    setupPlayer();
    setupSearch();
    window.addEventListener('hashchange', route);
    route();
}

init();
