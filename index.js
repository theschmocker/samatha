#! /usr/bin/env node
const MeditationTimer = require('./timer');
const player = require('play-sound')(opts = {});
const config = require('./config.json');

function alarm() {
    player.play(config.settings.sound);
}

const time = process.argv[2] || config.settings.timerDuration;

MeditationTimer.start(time, alarm);

// Exit gracefully when user exits with Ctrl-c
process.on('SIGINT', () => MeditationTimer.end());
