const player = require('play-sound')(opts = {});

player.play('output.mp3', (err) => {
    if (err) console.log(err);
    console.log('Session ended!')
});
