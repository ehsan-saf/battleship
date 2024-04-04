export default class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(10)
      .map(() => Array(10).fill(0));

    this.ships = {};
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

  allSunk() {
    const ships = Object.values(this.ships);
    return ships.every((sh) => sh.isSunk());
  }
}
