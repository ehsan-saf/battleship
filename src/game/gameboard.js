class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(10)
      .map(() => Array(10).fill(0));
  }

  placeShip(coordinates, name) {
    coordinates.forEach((co) => {
      const [x, y] = co;
      this.grid[x][y] = name;
    });
  }
}
