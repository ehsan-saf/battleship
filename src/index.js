import initDom from "./dom/general";
import Gameboard from "./game/gameboard";
import RandomFleet from "./game/randomfleet";
import { printGrid } from "./dom/grid";

initDom();

const randomFleet = new RandomFleet();
const board1 = randomFleet.randomBoard();
const board2 = randomFleet.randomBoard();
printGrid(board1.grid, 1);

export default function startGame() {}
