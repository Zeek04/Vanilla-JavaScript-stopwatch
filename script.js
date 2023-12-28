let startTime;
let stopWatchInterval;
let elapsedPausedTime = 0
const startButton = document.getElementById("startStopWatch")
const stopButton = document.getElementById("stopStopWatch")
const resetButton = document.getElementById("resetStopWatch")

startButton.addEventListener("click", () => {
        if(!stopWatchInterval){
            startTime = new Date().getTime() - elapsedPausedTime;
            stopWatchInterval = setInterval(updateStopwatch, 1000);
        }
})

stopButton.addEventListener("click", () => {
    clearInterval(stopWatchInterval);
    elapsedPausedTime = new Date().getTime() - startTime;
    stopWatchInterval = null
})

resetButton.addEventListener("click", () => {
    stopStopWatch();
    elapsedPausedTime = 0
    document.getElementById("stopwatch").innerHTML = "00:00:00";
})

function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("stopwatch").innerHTML = displayTime;
  }
  
  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }