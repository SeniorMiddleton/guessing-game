class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessValue = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessValue = Math.floor((this.min + this.max) / 2);
    return this.guessValue;
  }

  lower() {
    // if (this.guessValue === this.max) {

    //   this.max--;
    // }
    this.max = this.guessValue + 1;
  }

  greater() {
    this.min = this.guessValue;
  }
}

module.exports = GuessingGame;
