const GuessingGame = require("./src/guessing-game.js");

game.setRange(0, 385);

let guess;
do {
  guess = game.guess();
  if (guess < 359) {
    game.lower();
  } else if (guess > 359) {
    game.greater();
  }
} while (guess !== 359);
window.game = new GuessingGame();
