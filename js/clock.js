var interval;
const maxHeight = 30;
const timespan = .25 * 60; // 30s
var currentTime = timespan;
const emptyness = document.querySelector("#emptyness");
const intervalTime = .1; 
const filledFx = new Audio('./sound/thunder.mp3');

function startTimer(){
    console.log("Timer Started");
    interval = setInterval(fillClock, intervalTime * 1000);
}

function fillClock(){
    console.log("Filling Clock");
    currentTime -= intervalTime;
    const emptynessHeightPercentage = (100 * currentTime)/timespan;
    const emptynessHeight = maxHeight * (emptynessHeightPercentage/100);
    emptyness.style.height = `${emptynessHeight}em`;
    
    if (emptynessHeight <= 0) {
        filledFx.play();
        console.log("Time Stoped");
        clearInterval(interval);
    }
}

startTimer();