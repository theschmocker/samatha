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

        // TODO: Format this output more nicely
        console.log(`${timeElapsed === durationInSeconds ? 'The timer has finished.' : 'The timer was stopped early.'} You meditated for ${timeElapsed / 60} ${(timeElapsed / 60) === 1 ? 'minute' : 'minutes'}`);

        if (alarm) alarm();
    }

    return {
        start: start,
        end: end
    }

})();

