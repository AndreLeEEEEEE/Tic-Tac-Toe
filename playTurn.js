import { playerOne, playerTwo } from "./player.js";
import { nextTurn } from "./nextTurn.js";

export function playTurn(box) {
    box.innerText = nextTurn() ? playerTwo.symbol : playerOne.symbol;
}