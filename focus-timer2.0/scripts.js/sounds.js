export function Sound() {
  const audioRain = new Audio('./sounds/rain.wav');
  audioRain.loop = true;

  const audioCoffeeShop = new Audio('./sounds/coffeeshop.wav');
  audioCoffeeShop.loop = true;

  const audioForest = new Audio('./sounds/forest.wav');
  audioForest.loop = true;

  const audioFirePlace = new Audio('./sounds/fireplace.wav');
  audioFirePlace.loop = true;

  const controlVolumes = document.querySelectorAll('[class^="volume-slider-"]');
  const state = { 
    isVolumeClicked: false,
    currentVolumeIndex: null };

  controlVolumes.forEach((controlVolume) => {
    controlVolume.addEventListener('click', () => {
      state.isVolumeClicked = true;
      state.currentVolumeIndex = Array.from(controlVolumes).indexOf(controlVolume)
    });
  });

  function playAudioButton(audio, controlVolumes, state, index) {
    let volumeControl = controlVolumes[index];
    if(!state.isVolumeClicked || state.currentVolumeIndex !== index){
      if (audio.paused) {
        audio.volume = volumeControl.value;
        volumeControl.style.display = "block";
        volumeControl.classList.add('buttonPlaying')
        audio.play()
      } else {
        volumeControl.style.display = "none";
        audio.pause();
      }
    } else {
      state.isVolumeClicked = false;
      setVolume(audio, volumeControl);
    }
  }

  function setVolume (audio, volumeControl) {
    audio.volume = volumeControl.value;
  }

  return {
    audioCoffeeShop,
    audioForest,
    audioFirePlace,
    audioRain,
    playAudioButton,
    controlVolumes,
    state
  }
}
