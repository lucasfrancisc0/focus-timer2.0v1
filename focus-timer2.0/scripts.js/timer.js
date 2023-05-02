export function Timer ({
  minutesDisplay,
  secondsDisplay
 }){
  let timerTimeOut;

  function countdown () {
    timerTimeOut = setTimeout (function () {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if(isFinished) {
        updateDisplay();
        return
      }

      if (seconds<= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds-1));

      countdown();
    }, 1000);
  }

  function updateDisplay(minutes, seconds) {
    minutes = minutes === undefined ? 0 : minutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function hold () {
    clearTimeout(timerTimeOut)
  }

  function addTime (minutes) {
    let newMinutes = +minutesDisplay.textContent + 5;
    updateDisplay(newMinutes, secondsDisplay.textContent);
  }

  function reduceTime (minutes) {
    let newMinutes = minutesDisplay.textContent - 5;
    updateDisplay(newMinutes, secondsDisplay.textContent);
    if (newMinutes <= 0) {
      newMinutes = minutesDisplay.textContent = '00'
    }
  }
 
  return {
    updateDisplay,
    countdown,
    hold,
    addTime,
    reduceTime
  }

}