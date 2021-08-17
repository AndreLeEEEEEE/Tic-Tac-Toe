import { playTurn } from "./playTurn.js";

export let boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.addEventListener("click", () => {
        playTurn(box);
    });
}