import { toggleGrids } from "./grid";
import startGame from "..";

let inputGroup = null;

let player1Input = null;
let player2Input = null;

let startButton = null;
let computerMode = null;

function initStartMenu() {
  inputGroup = document.querySelector(".input-group");

  player1Input = document.getElementById("player1-input");
  player2Input = document.getElementById("player2-input");

  computerMode = document.getElementById("computer-mode");

  startButton = document.querySelector(".start-button");

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
    startGame();
  });
}

export default function initControls() {
  initStartMenu();
}
