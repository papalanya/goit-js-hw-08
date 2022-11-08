import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(saveTime, 1000));

if (currentTime) {
    player.setCurrentTime(currentTime);    
}

function saveTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}