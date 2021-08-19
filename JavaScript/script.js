import { playGame } from "./playGame.js";
import { Player } from "./player.js";
import { restart } from "./restart.js";

document.getElementById("start-btn").addEventListener("click", () =>
    playGame(Player("A", "X"), Player("B", "O")));

document.getElementById("restart-btn").addEventListener("click", () => {
    restart();
});
