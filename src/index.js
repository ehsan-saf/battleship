import initDom from "./dom/general";
import Gameboard from "./game/gameboard";
import RandomFleet from "./game/randomfleet";
import { printGrid } from "./dom/grid";

initDom();

let randomFleet = new RandomFleet();
let board1 = randomFleet.randomBoard();
console.table(board1.grid);
printGrid(board1.grid, 1);

export default function startGame() {}
