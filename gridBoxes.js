import { playTurn } from "./gameFlow";

export let boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.addEventListener("click", playTurn());
}