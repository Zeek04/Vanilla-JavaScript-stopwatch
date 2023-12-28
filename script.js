let startTime;
let elapsedPausedTime = 0;
let animationFrameId;
const startButton = document.getElementById("startStopWatch");
const stopButton = document.getElementById("stopStopWatch");
const resetButton = document.getElementById("resetStopWatch");

startButton.addEventListener("click", () => {
    if (!animationFrameId) {
        startTime = new Date().getTime() - elapsedPausedTime;
        requestAnimationFrame(updateStopwatch);
    }
});

stopButton.addEventListener("click", () => {
    cancelAnimationFrame(animationFrameId);
    elapsedPausedTime = new Date().getTime() - startTime;
    animationFrameId = null;
});

resetButton.addEventListener("click", () => {
    cancelAnimationFrame(animationFrameId);
    elapsedPausedTime = 0;
    document.getElementById("stopwatch").innerHTML = "00:00:00 000";
});

function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let milliseconds = elapsedTime % 1000;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + " " + pad(milliseconds, 3);
    document.getElementById("stopwatch").innerHTML = displayTime;
    animationFrameId = requestAnimationFrame(updateStopwatch);
}

function pad(number, width = 2) {
    return (new Array(width).join('0') + number).slice(-width);
}