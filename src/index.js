import initDom from "./dom/general";
import RandomFleet from "./game/randomfleet";
import { enableAttackGrid, printGrid } from "./dom/grid";
import Player from "./game/player";
import Computer from "./game/computer";

initDom();

const randomFleet = new RandomFleet();
const board1 = randomFleet.randomBoard();
const board2 = randomFleet.randomBoard();
let turn = 1;

let player = null;
let computer = null;

export function targetBoard() {
  if (turn === 1) {
    return player.enemyBoard;
  }
  return computer.enemyBoard;
}

printGrid(board1.grid, 1);

export function startGame() {
  player = new Player(board2);
  computer = new Computer(board1);
}

export function play(x, y) {
  console.log(player);
  if (turn === 1) {
    player.attackEnemy(x, y);
  } else {
    computer.attackEnemy(x, y);
  }
  enableAttackGrid(turn - 1);
  turn = turn === 1 ? 2 : 1;
}
