const player = require('play-sound')(opts = {});
const clearScreen = require('./util/clearScreen');

function printTimeLeft(duration, elapsed) {
    const minutes = Math.floor((duration - elapsed) / 60);
    let seconds = Math.floor((duration - elapsed) % 60);

    // Make sure that (minutes):00 is printed when seconds === 0
    seconds = (seconds !== 0) ? seconds : '00';

    console.log(`${minutes}:${seconds}`);
}

function meditationTimer(duration, callback) {
    const durationInSeconds = duration * 60;
    let timeElapsed = 0;

    clearScreen();
    printTimeLeft(durationInSeconds, timeElapsed);

    let timer = setInterval(() => {
        timeElapsed += 1;
        if (timeElapsed == durationInSeconds) {
            clearInterval(timer);
            console.log(`The timer has finished. You meditated for ${timeElapsed / 60} minutes. `);
            if (callback) callback();
        }
        clearScreen();
        printTimeLeft(durationInSeconds, timeElapsed);
    }, 1000);
}

meditationTimer(1.33);
