import Ship from "../src/game/ship";

test("Ship sinks if hits is equal to ship's length", () => {
  const length = 3;
  const ship = new Ship(length);
  for (let i = 1; i <= length; i += 1) {
    ship.hit();
  }
  const actual = ship.isSunk();
  expect(actual).toBe(true);
});
