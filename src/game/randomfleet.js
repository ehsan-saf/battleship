import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

class RandomFleet {
  constructor() {
    this.board = new Gameboard();
    this.occupied = new Set();
  }

  randomBoard() {
    const carrier = new Ship(5);
    const battleShip = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);
    const shipLengths = [2, 3, 3, 4, 5];
    const shipNames = ["p", "s", "d", "b", "c"];
    this.board.ships = {
      c: carrier,
      b: battleShip,
      d: destroyer,
      s: submarine,
      p: patrolBoat,
    };
    while (shipLengths.length !== 0) {
      let shipPlaced = this.placeRandom(shipLengths.at(-1), shipNames.at(-1));
      while (!shipPlaced) {
        shipPlaced = this.placeRandom(shipLengths.at(-1), shipNames.at(-1));
      }
      shipLengths.pop();
      shipNames.pop();
    }
    return this.board;
  }

  placeRandom(length, name) {
    const getRandom = () => Math.floor(Math.random() * 9);
    const isVertical = Math.floor(Math.random() * 2) === 1;
    let ship = [];
    let x = getRandom();
    let y = getRandom();
    if (this.areCoordinatesOk([x, y], isVertical, length)) {
      for (let i = 1; i <= length; i += 1) {
        if (isVertical) {
          y += 1;
        } else {
          x += 1;
        }
        ship.push([x, y]);
        this.occupied.add(`${x}${y}`);
      }
      this.board.placeShip(ship, name);
      return true;
    }
    return false;
  }

  areCoordinatesOk(coordinates, isVertical, length) {
    let [x, y] = coordinates;
    for (let i = 1; i <= length; i += 1) {
      if (isVertical) {
        y += 1;
      } else {
        x += 1;
      }
      if (this.occupied.has(`${x}${y}`) || x > 9 || y > 9) {
        return false;
      }
    }
    return true;
  }
}
