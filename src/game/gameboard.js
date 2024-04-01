class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(10)
      .map(() => Array(10).fill(0));
  }
}
