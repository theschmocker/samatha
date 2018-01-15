#! /usr/bin/env node
const player = require('play-sound')(opts = {});
const cli = require('./util/cli');
const clear = require('clear');

const config = require('./config.json');

function alarm() {
    player.play(config.settings.sound);
}

function meditationTimer(duration, callback) {
    const durationInSeconds = duration * 60;
    let timeElapsed = 0;

    cli.clearScreen();
    cli.printTimeLeft(durationInSeconds, timeElapsed);

    let timer = setInterval(() => {
        timeElapsed += 1;
        if (timeElapsed == durationInSeconds) {
            clearInterval(timer);
            console.log(`The timer has finished. You meditated for ${timeElapsed / 60} minutes. `);
            if (callback) callback();
            return;
        }
        clear();
        cli.printTimeLeft(durationInSeconds, timeElapsed);
    }, 1000);
}

const time = process.argv[2] || config.settings.timerDuration;
meditationTimer(time, alarm);
