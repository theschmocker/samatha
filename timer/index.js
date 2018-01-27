const cli = require('../util/cli');
const clear = require('clear');
const config = require('../config.json');

module.exports = (function MeditationTimer() {
    let durationInSeconds;
    let timeElapsed;
    let interval;

    function start(duration, alarm) {
        durationInSeconds = duration * 60;
        timeElapsed = 0;

        cli.clearScreen();
        cli.printTimeLeft(durationInSeconds, timeElapsed);

        interval = setInterval(() => {
            timeElapsed += 1;
            if (timeElapsed === durationInSeconds) return end(alarm);
            clear();
            cli.printTimeLeft(durationInSeconds, timeElapsed);
        }, 1000);

    }

    function end(alarm) {
        clearInterval(interval);
        clear();
        cli.timerFinishedDisplay(timeElapsed, durationInSeconds);
        if (alarm) alarm();
    }

    return {
        start: start,
        end: end
    }

})();

