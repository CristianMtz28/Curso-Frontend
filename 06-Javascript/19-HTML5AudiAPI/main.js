'use strict'

/**HTML5 Audio API / Video DOM & JavaScript */

//Haciendo funcionar botones de vídeo

var video = document.getElementById('video');
var btnPlay = document.getElementById('play');
var btnPause = document.getElementById('pause');
var volumen = document.getElementById('volumen');

btnPlay.addEventListener('click', function(){
    video.play();
});

btnPause.addEventListener('click', function(){
    video.pause();
});

volumen.addEventListener('change', function(){
    video.volume = volumen.value;
});

//Haciendo funcionar botones de audio

var audio = document.getElementById('audio');
var btnPlayAudio = document.getElementById('playAudio');
var btnPauseAudio = document.getElementById('pauseAudio');
var volumenAudio = document.getElementById('volumenAudio');

btnPlayAudio.addEventListener('click', function(){
    audio.play();
});

btnPauseAudio.addEventListener('click', function(){
    audio.pause();
});

volumenAudio.addEventListener('change', function(){
    audio.volume = volumenAudio.value;
});