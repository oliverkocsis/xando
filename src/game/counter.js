export class Counter {
  constructor(spaces, width, height, countToWin) {
    this.spaces = spaces;
    this.width = width;
    this.height = height;
    this.countToWin = countToWin;
    this.winnerIndex = [];
  }

  whoDidWinHorizontally() {
    for (let row = 0; row < this.height; row++) {
      const index = this._calculateIndexFor(row, 0);
      let expected = this.spaces[index];
      let continuousCount = 1;
      this.winnerIndex = [index];
      for (let column = 1; column < this.width; column++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.spaces[index];
        if (expected === current) {
          continuousCount++;
          this.winnerIndex.push(index);
        } else {
          expected = current;
          continuousCount = 1;
          this.winnerIndex = [index];
        }
        if (continuousCount === this.countToWin) {
          return expected;
        }
      }
    }
  }

  whoDidWinVertically() {
    this.winnerIndex = [];
    for (let column = 0; column < this.width; column++) {
      const index = this._calculateIndexFor(0, column);
      let expected = this.spaces[index];
      let continuousCount = 1;
      this.winnerIndex = [index];
      for (let row = 1; row < this.height; row++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.spaces[index];
        if (expected === current) {
          continuousCount++;
          this.winnerIndex.push(index);
        } else {
          expected = current;
          continuousCount = 1;
          this.winnerIndex = [index];
        }
        if (continuousCount === this.countToWin) {
          return expected;
        }
      }
    }
  }

  whoDidWinDiagonalForward() {
    const first = this._calculateIndexFor(0, 0);
    const expected = this.spaces[first];
    const second = this._calculateIndexFor(1, 1);
    const secondActual = this.spaces[second];
    const third = this._calculateIndexFor(2, 2);
    const thirdActual = this.spaces[third];
    if (expected === secondActual && secondActual === thirdActual) {
      this.winnerIndex = [first, second, third];
      return expected;
    } else {
      return null;
    }
  }

  whoDidWinDiagonalBackward() {
    const first = this._calculateIndexFor(0, 2);
    const expected = this.spaces[first];
    const second = this._calculateIndexFor(1, 1);
    const secondActual = this.spaces[second];
    const third = this._calculateIndexFor(2, 0);
    const thirdActual = this.spaces[third];
    if (expected === secondActual && secondActual === thirdActual) {
      this.winnerIndex = [first, second, third];
      return expected;
    } else {
      return null;
    }
  }

  whoDidWin() {
    let winner;
    winner = this.whoDidWinHorizontally();
    if (winner) {
      return winner;
    }
    winner = this.whoDidWinVertically();
    if (winner) {
      return winner;
    }
    winner = this.whoDidWinDiagonalForward();
    if (winner) {
      return winner;
    }
    winner = this.whoDidWinDiagonalBackward();
    if (winner) {
      return winner;
    }
    return null;
  }

  getWinnerIndexes() {
    return this.winnerIndex;
  }

  _calculateIndexFor(row, column) {
    return row * this.width + column;
  }
}