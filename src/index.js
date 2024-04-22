import initDom from "./dom/general";
import RandomFleet from "./game/randomfleet";
import {
  disableComputerAttack,
  enableComputerAttack,
  printGrid,
  styleAttackedCell,
} from "./dom/grid";
import Player from "./game/player";
import Computer from "./game/computer";

initDom();

const randomFleet = new RandomFleet();
let board1 = randomFleet.randomBoard();
let board2 = randomFleet.randomBoard();
let turn = 1;

let player = null;
let computer = null;

export function assignBoard(boardNumber, board) {
  if (boardNumber === 1) {
    board1 = board;
  } else {
    board2 = board;
  }
}

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
  // The player attacks
  styleAttackedCell(2, x, y, player.enemyBoard.isCellEmpty(x, y));
  player.attackEnemy(x, y);
  // Computer attacks
  enableComputerAttack();
  setTimeout(() => {
    const [xc, yc] = computer.attackEnemy();
    styleAttackedCell(1, xc, yc, computer.enemyBoard.isCellEmpty(xc, yc));
    disableComputerAttack();
  }, 1500);
}
