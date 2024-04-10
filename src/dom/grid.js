let lockedSound = null;

const boards = document.querySelector(".boards");

const grids = [];

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("mouseover", (e) => {
    console.log(e.target);
    e.target.classList.add("target-cell");
    lockedSound.currentTime = 0;
    lockedSound.play();
  });
  cell.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("target-cell");
    lockedSound.pause();
  });
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
  grid.classList.add("board");
  grid.classList.add("disable");
  grids.push(grid);
  grid.id = gridID;
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

export function toggleGrids() {
  grids.forEach((grid) => {
    grid.classList.toggle("disable");
  });
}
