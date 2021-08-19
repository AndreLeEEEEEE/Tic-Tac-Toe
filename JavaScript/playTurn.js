import { gameBoard } from "./gameBoard.js";
import { displayBoard } from "./displayBoard.js";
let turnOrder = true;

export function playTurn(box, playerOne, playerTwo) {
    if (box.innerText === "") {
        box.innerText = turnOrder ? playerOne.symbol : playerTwo.symbol;
    }
    turnOrder = !turnOrder;

    gameBoard.symbols[Number(box.id)] = box.innerText;
    displayBoard(gameBoard.symbols);
}