function formatTime(time) {
    let minutes = Math.floor((time) / 60);
    let seconds = Math.floor((time) % 60);

    // Formatting
    minutes = (minutes > 10) ? minutes : '0' + minutes;
    seconds = (seconds > 10) ? seconds : '0' + seconds;

    return `${minutes}:${seconds}`;
}
function printTimeLeft(duration, elapsed) {
    const timeLeft = duration - elapsed;

    console.log(formatTime(timeLeft));
}

function timerFinishedDisplay(timeElapsed, durationInSeconds) {
    const timerEndedEarly = timeElapsed !== durationInSeconds;
        console.log(`${timerEndedEarly ? 'The timer was stopped early.' : 'The timer has finished'} You meditated for ${formatTime(timeElapsed)}.`);

}

function clearScreen() {
    const readline = require('readline');
    const blank = '\n'.repeat(process.stdout.rows);

    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
}

module.exports = { printTimeLeft, clearScreen, timerFinishedDisplay };
