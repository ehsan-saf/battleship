import { play, targetBoard } from "..";

let lockedSound = null;

const boards = document.querySelector(".grids");

const grids = [];

function styleAttackedCell(cell, isEmpty) {
  const symbol = cell.querySelector(".symbol");
  if (isEmpty) {
    cell.textContent = "⚫";
    cell.classList.add("empty-attack");
    //  if it's empty, disable and mark it as an empty attacked cell in css
  } else {
    cell.textContent = "❌";
    cell.classList.add("ship-attack");
    //  if there is a ship, disable and mark it as an attacked ship
  }
}

function cellHover(e) {
  const cell = e.target;
  const grid = cell.closest(".grid");
  if (grid.classList.contains("attack")) {
    cell.classList.add("target-cell");
    lockedSound.currentTime = 0;
    lockedSound.play();
  }
}

function attackCell(e) {
  const cell = e.target;
  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);
  // Check whether it's an empty cell or has a ship on it
  const board = targetBoard();
  styleAttackedCell(cell, board.isCellEmpty(x, y));
  play(x, y);
}

function createCell() {
  const cell = document.createElement("div");
  const symbol = document.createElement("p");
  cell.classList.add("cell");
  symbol.classList.add("symbol");
  cell.addEventListener("mouseover", cellHover);
  cell.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("target-cell");
    lockedSound.pause();
  });
  cell.addEventListener("click", attackCell);
  cell.appendChild(symbol);
  return cell;
}

function createGridContainer(gridID) {
  const gridName = document.createElement("div");
  const playerName = document.createElement("p");
  gridName.classList.add("grid-name");
  playerName.classList.add("player-name");
  playerName.id = `name${gridID}`;
  playerName.textContent = `Player ${gridID}`;
  gridName.appendChild(playerName);
  return gridName;
}

function createGrid(gridID) {
  lockedSound = new Audio("./sound/target-locked.mp3");
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grids.push(grid);
  grid.id = `grid${gridID}`;
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const cell = createCell();
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }
  const gridNameContainer = createGridContainer(gridID);
  gridNameContainer.appendChild(grid);
  boards.appendChild(gridNameContainer);
}

export function initGrids() {
  createGrid(1);
  createGrid(2);
}

export function printGrid(array, gridID) {
  const grid = document.getElementById(`grid${gridID}`);
  const cells = grid.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("ship");
  });
  let x = 0;
  let y = 0;
  cells.forEach((cell) => {
    console.log(`${x}:${y}`);
    if (array[x][y] !== 0) {
      cell.classList.add("ship");
    }
    y += 1;
    if (y === 10) {
      y = 0;
      x += 1;
    }
  });
}

export function enableAttackGrid(gridIndex) {
  grids[gridIndex].classList.add("attack");
  grids[gridIndex].classList.remove("disable");
  const otherIndex = gridIndex === 0 ? 1 : 0;
  grids[otherIndex].classList.remove("attack");
  grids[otherIndex].classList.add("disable");
}
