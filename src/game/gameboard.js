class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(10)
      .map(() => Array(10).fill(0));
    this.ships = { c: null, b: null, d: null, s: null, p: null };
  }

  placeShip(coordinates, name) {
    coordinates.forEach((co) => {
      const [x, y] = co;
      this.grid[x][y] = name;
    });
  }

  receiveAttack(x, y) {
    if (this.grid[x][y] === 0) {
      this.grid[x][y] = 1;
    } else {
      this.ships[this.grid[x][y]].hit();
    }
  }
}
