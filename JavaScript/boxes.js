import { playTurn } from "./playTurn.js";

export function assignBoxEvent(playerOne, playerTwo) {
    let boxes = document.getElementsByClassName("box");
    for (let box of boxes) {
        box.addEventListener("click", () => {
            playTurn(box, boxes, playerOne, playerTwo);
        });
    }
}