import RandomFleet from "../game/randomfleet";
import { printGrid, toggleGrids } from "./grid";
import startGame from "..";

let inputGroup = null;

let player1Input = null;
let player2Input = null;

let startButton = null;
let computerMode = null;

let name1 = null;
let name2 = null;

function initStartMenu() {
  inputGroup = document.querySelector(".input-group");

  player1Input = document.getElementById("player1-input");
  player2Input = document.getElementById("player2-input");

  computerMode = document.getElementById("computer-mode");

  startButton = document.querySelector(".start-button");

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
    toggleGrids();
    inputGroup.classList.add("hide-animation");
    setTimeout(() => {
      inputGroup.style.display = "none";
    }, 2000);

    if (player1Input.value.trim() !== "") {
      name1.textContent = player1Input.value.trim();
    }
    if (player2Input.value.trim() !== "") {
      name2.textContent = player2Input.value.trim();
    }
    if (computerMode.checked) {
      name2.textContent = "Computer";
    }
    startGame();
  });
}

function initRandomButton() {
  const btn = document.querySelector(".random-button");

  btn.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      // Play pressing animation
      btn.classList.remove("random-button-click");
      void btn.offsetWidth;
      btn.classList.add("random-button-click");

      // Create random board
      const randomFleet = new RandomFleet();
      const board = randomFleet.randomBoard();
      printGrid(board.grid, 1);
    },
    false
  );
}

export default function initControls() {
  initStartMenu();
  initRandomButton();
}
