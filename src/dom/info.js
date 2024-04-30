import Player from "../game/player";

const message = document.querySelector(".message");

export function setTurnInfo(player) {
  message.textContent = `${player.name} attack the enemy's fleet !`;
}
