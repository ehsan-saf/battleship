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
import { setTurnInfo } from "./dom/info";

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

export function startGame(name1, name2) {
  player = new Player(name1, board2);
  computer = new Computer(name2, board1);
}

export function play(x, y) {
  setTurnInfo(computer);
  // The player attacks
  styleAttackedCell(2, x, y, player.enemyBoard.isCellEmpty(x, y));
  player.attackEnemy(x, y);
  if (player.enemyBoard.allSunk()) {
    console.log("All Computer ships have been sunk!");
  } else {
    // Computer attacks
    enableComputerAttack();
    setTimeout(() => {
      const [xc, yc] = computer.attackEnemy();
      styleAttackedCell(1, xc, yc, computer.enemyBoard.isCellEmpty(xc, yc));
      disableComputerAttack();
      setTurnInfo(player);
    }, 1500);
    if (computer.enemyBoard.allSunk()) {
      console.log("All player's ships have been sunk!");
    }
  }

  function gameOver(winnerPlayer) {}
}
