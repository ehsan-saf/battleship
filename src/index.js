import initDom from "./dom/general";
import Gameboard from "./game/gameboard";
import RandomFleet from "./game/randomfleet";
import { printGrid } from "./dom/grid";

initDom();

const randomFleet = new RandomFleet();
const board = randomFleet.randomBoard();
printGrid(board.grid, 1);

export default function startGame() {}
