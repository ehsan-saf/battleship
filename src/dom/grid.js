let lockedSound = null;

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

function createGrid(gridID) {
  lockedSound = new Audio("./sound/target-locked.mp3");
  const grid = document.createElement("div");
  grid.classList.add("board");
  grid.id = gridID;
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const cell = createCell();
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }
  document.body.appendChild(grid);
}

export default function initGrid(gridID) {
  createGrid(gridID);
}
