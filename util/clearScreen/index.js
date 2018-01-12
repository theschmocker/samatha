const readline = require('readline');
const blank = '\n'.repeat(process.stdout.rows);

module.exports = function clearScreen() {
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
}
