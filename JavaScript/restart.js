import { resetTurn } from "./playTurn.js";
import { gameBoard } from "./gameBoard.js";

export function restart() {
    document.getElementById("end-window").style.display = "none";
    let boxes = document.getElementsByClassName("box");
    for (let box of boxes) {
        box.style.backgroundColor = "white";
        box.innerText = "";
    }
    resetTurn();
    for (let index in gameBoard.symbols) {
        gameBoard.symbols[index] = "";
    }
}