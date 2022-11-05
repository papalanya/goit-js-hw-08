import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));    
}

function saveTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}