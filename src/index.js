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
import { setTurnInfo, setWinnerInfo } from "./dom/info";
import Gameboard from "./game/gameboard";

initDom();

let board1 = null;
let board2 = null;

export function generateRandomBoards() {
  const randomFleet = new RandomFleet();
  board1 = randomFleet.randomBoard();
  board2 = randomFleet.randomBoard();
  printGrid(board1.grid, 1);
  return [board1, board2];
}

generateRandomBoards();

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

export function startGame(name1, name2) {
  player = new Player(name1, board2);
  computer = new Computer(name2, board1);
}

function endGame(winner) {
  Gameboard.disableGridClick();
  setWinnerInfo(winner);
}

export function play(x, y) {
  setTurnInfo(computer);
  // The player attacks
  styleAttackedCell(2, x, y, player.enemyBoard.isCellEmpty(x, y));
  player.attackEnemy(x, y);
  if (player.enemyBoard.allSunk()) {
    endGame(player);
    console.log("All Computer ships have been sunk!");
  } else {
    // Computer attacks
    enableComputerAttack();
    setTimeout(() => {
      const [xc, yc] = computer.attackEnemy();
      styleAttackedCell(1, xc, yc, computer.enemyBoard.isCellEmpty(xc, yc));
      disableComputerAttack();
      setTurnInfo(player);
    }, 1000);
    if (computer.enemyBoard.allSunk()) {
      endGame(computer);
      console.log("All player's ships have been sunk!");
    }
  }
}
