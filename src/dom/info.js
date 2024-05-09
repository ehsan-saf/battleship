import Player from "../game/player";

const message = document.querySelector(".message");

export function setTurnInfo(player) {
  message.textContent = `${player.name} attack the enemy's fleet !`;
}

export function setWinnerInfo(player) {
  message.classList.add("win-message");
  message.textContent = `${player.name} won the game !`;
}
