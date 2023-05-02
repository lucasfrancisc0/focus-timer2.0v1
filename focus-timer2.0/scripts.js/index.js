import { Timer } from './timer.js'
import { Sound } from './sounds.js'
import {
  buttonSoundFirePlace,
  buttonSoundCoffee,
  buttonSoundRain,
  buttonSoundForest,
  buttonReduce,
  buttonAdd,
  buttonStop,
  buttonPlay,
  minutesDisplay,
  secondsDisplay
} from './elements.js'
const timer = Timer({
  secondsDisplay,
  minutesDisplay
})
const sounds = Sound();
const volumeControlDiv = document.querySelector('#volume-control-div');

function selectButton(button, event) {
  if (event.target.closest('[class^="volume-slider-"]')) {
    return;
  }

  const buttons = [buttonSoundCoffee, buttonSoundFirePlace, buttonSoundForest, buttonSoundRain];

  buttons.filter(btn => btn !== button).forEach(btn => btn.classList.remove('selectedButtonSound'));
  button.classList.toggle('selectedButtonSound');
}


buttonPlay.addEventListener('click', function(){
  timer.countdown();
})

buttonStop.addEventListener('click', function () {
  timer.hold();
})

buttonAdd.addEventListener('click', function (){
  timer.addTime();
})

buttonReduce.addEventListener('click', function (){
  timer.reduceTime();
})

buttonSoundRain.addEventListener('click', function (event) {
  selectButton(buttonSoundRain, event);
  sounds.playAudioButton(sounds.audioRain, sounds.controlVolumes, sounds.state, 1);
})

buttonSoundForest.addEventListener('click', function(event) {
  selectButton(buttonSoundForest, event);
  sounds.playAudioButton(sounds.audioForest, sounds.controlVolumes, sounds.state, 0);
})

buttonSoundCoffee.addEventListener('click', function(event){
  selectButton(buttonSoundCoffee, event);
  sounds.playAudioButton(sounds.audioCoffeeShop, sounds.controlVolumes, sounds.state, 2);
})

buttonSoundFirePlace.addEventListener('click', function(event){
  selectButton(buttonSoundFirePlace, event);
  sounds.playAudioButton(sounds.audioFirePlace, sounds.controlVolumes, sounds.state, 3);
})