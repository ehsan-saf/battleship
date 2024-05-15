import { play } from "..";

let lockedSound = null;

const boards = document.querySelector(".grids");

let grids = [];

export function styleAttackedCell(gridNum, x, y, isEmpty) {
  const cell = document.querySelector(
    `#grid${gridNum} .cell[data-x="${x}"][data-y="${y}"]`
  );
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
  console.log(grid);
  if (grid.classList.contains("active")) {
    cell.classList.add("target-cell");
    lockedSound.currentTime = 0;
    lockedSound.play();
  }
}

function attackCell(e) {
  const cell = e.target;
  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);
  play(x, y);
}

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("mouseover", cellHover);
  cell.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("target-cell");
    lockedSound.pause();
  });
  cell.addEventListener("click", attackCell);
  return cell;
}

function createGridContainer(gridID) {
  const gridContainer = document.createElement("div");
  const playerName = document.createElement("p");
  gridContainer.classList.add("grid-container");
  playerName.classList.add("player-name");
  playerName.id = `name${gridID}`;
  playerName.textContent = `Player ${gridID}`;
  gridContainer.appendChild(playerName);
  return gridContainer;
}

function createGrid(gridID) {
  lockedSound = new Audio("./sound/target-locked.mp3");
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grids.push(grid);
  grid.id = `grid${gridID}`;
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      const cell = createCell();
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }
  const gridContainer = createGridContainer(gridID);
  gridContainer.appendChild(grid);
  boards.appendChild(gridContainer);
}

export function initGrids() {
  createGrid(1);
  createGrid(2);
}

export function printGrid(array, gridID) {
  console.table(array);
  const grid = document.getElementById(`grid${gridID}`);
  const cells = grid.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("ship");
  });
  let x = 0;
  let y = 0;
  cells.forEach((cell) => {
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
  grids[gridIndex].classList.add("active");
  grids[gridIndex].classList.remove("disable");
  const otherIndex = gridIndex === 0 ? 1 : 0;
  grids[otherIndex].classList.remove("attack");
  grids[otherIndex].classList.remove("active");
  grids[otherIndex].classList.add("disable");
}

export function enableComputerAttack() {
  grids[1].classList.add("disable");
  grids[0].classList.add("computer-attack");
  grids[0].classList.remove("disable");
}

export function disableComputerAttack() {
  grids[1].classList.remove("disable");
  grids[1].classList.add("active");
  grids[0].classList.remove("computer-attack");
  grids[0].classList.add("disable");
}

export function clearGridClass() {
  grids[0].className = "grid";
  grids[1].className = "grid";
}

export function restartGrids() {
  boards.innerHTML = "";
  grids = [];
  initGrids();
  grids[0].classList.add("disable");
  grids[1].classList.add("disable");
}
