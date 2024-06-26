import RandomFleet from "../game/randomfleet";
import { clearGridClass, printGrid, restartGrids } from "./grid";
import { startGame, assignBoard } from "..";

let inputGroup = null;

let player1Input = null;
let player2Input = null;

let startButton = null;
let randomButton = null;
let restartButton = null;
let computerMode = null;

let name1 = null;
let name2 = null;

function restartInputs() {
  player1Input.textContent = "";
  player2Input.textContent = "";
  computerMode.checked = false;

  restartButton.classList.add("hide-animation");
  inputGroup.classList.remove("hide-animation");
  randomButton.classList.remove("hide-animation");
  restartButton.style.display = "none";
  inputGroup.style.display = "grid";
  randomButton.style.display = "unset";

  setTimeout(() => {}, 1300);
}

function restartGame() {
  restartInputs();
  restartGrids();
}

function initStartMenu() {
  inputGroup = document.querySelector(".input-group");

  player1Input = document.getElementById("player1-input");
  player2Input = document.getElementById("player2-input");

  computerMode = document.getElementById("computer-mode");

  startButton = document.querySelector(".start-button");

  restartButton = document.querySelector(".restart-button");

  name1 = document.getElementById("name1");
  name2 = document.getElementById("name2");

  computerMode.addEventListener("change", (e) => {
    if (e.target.checked) {
      player2Input.closest("label").style.display = "none";
    } else {
      player2Input.closest("label").style.display = "flex";
    }
  });

  startButton.addEventListener("click", () => {
    clearGridClass();
    restartButton.classList.remove("hide-animation");
    inputGroup.classList.add("hide-animation");
    randomButton.classList.add("hide-animation");
    setTimeout(() => {
      inputGroup.style.display = "none";
      randomButton.style.display = "none";
      restartButton.style.display = "block";
    }, 1300);

    if (player1Input.value.trim() !== "") {
      name1.textContent = player1Input.value.trim();
    }
    if (player2Input.value.trim() !== "") {
      name2.textContent = player2Input.value.trim();
    }
    if (computerMode.checked) {
      name2.textContent = "Computer";
    }
    startGame(name1.textContent, name2.textContent);
  });

  restartButton.addEventListener("click", restartGame);
}

function initRandomButton() {
  randomButton = document.querySelector(".random-button");

  randomButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      // Play pressing animation
      randomButton.classList.remove("random-button-click");
      void randomButton.offsetWidth;
      randomButton.classList.add("random-button-click");

      // Create random board
      const randomFleet = new RandomFleet();
      const board = randomFleet.randomBoard();
      assignBoard(1, board);
      printGrid(board.grid, 1);
    },
    false
  );
}

export default function initControls() {
  initStartMenu();
  initRandomButton();
}
