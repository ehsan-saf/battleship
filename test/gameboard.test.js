import Gameboard from "../src/game/gameboard";
import Ship from "../src/game/ship";

const carrier = new Ship(5);
const battleShip = new Ship(4);
const destroyer = new Ship(3);
const submarine = new Ship(3);
const patrolBoat = new Ship(2);

const ships = {
  c: carrier,
  b: battleShip,
  d: destroyer,
  s: submarine,
  p: patrolBoat,
};

test("all Sunk returns false if there are any remaining ships on the grid", () => {
  const board = new Gameboard();
  board.ships = ships;
  for (let i = 1; i <= 5; i += 1) ships.c.hit();
  for (let i = 1; i <= 4; i += 1) ships.b.hit();
  for (let i = 1; i <= 3; i += 1) ships.d.hit();
  for (let i = 1; i <= 3; i += 1) ships.s.hit();
  const actual = board.allSunk();
  expect(actual).toBe(false);
});

test("all Sunk returns true if every ship is sunk", () => {
  const board = new Gameboard();
  board.ships = ships;
  for (let i = 1; i <= 5; i += 1) ships.c.hit();
  for (let i = 1; i <= 4; i += 1) ships.b.hit();
  for (let i = 1; i <= 3; i += 1) ships.d.hit();
  for (let i = 1; i <= 3; i += 1) ships.s.hit();
  const actual = board.allSunk();
  expect(actual).toBe(false);
});

function fillBoard(board) {
  board.placeShip(
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
    ],
    "c"
  );
  Gameboard.placeShip(
    [
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ],
    "b"
  );
  Gameboard.placeShip(
    [
      [2, 6],
      [2, 7],
      [2, 8],
    ],
    "d"
  );
  Gameboard.placeShip(
    [
      [5, 2],
      [5, 3],
      [5, 4],
    ],
    "s"
  );
  Gameboard.placeShip(
    [
      [8, 5],
      [8, 6],
    ],
    "p"
  );
}
