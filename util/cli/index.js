function printTimeLeft(duration, elapsed) {
    let minutes = Math.floor((duration - elapsed) / 60);
    let seconds = Math.floor((duration - elapsed) % 60);

    // Formatting
    minutes = (minutes > 10) ? minutes : '0' + minutes;
    seconds = (seconds > 10) ? seconds : '0' + seconds;

    console.log(`${minutes}:${seconds}`);
}

function clearScreen() {
    const readline = require('readline');
    const blank = '\n'.repeat(process.stdout.rows);

    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
}

module.exports = { printTimeLeft, clearScreen };
