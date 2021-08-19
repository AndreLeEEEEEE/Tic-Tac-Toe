import { gameBoard } from "./gameBoard.js";
import { checkForWin } from "./checkForWin.js";
let turnOrder = true;

export function playTurn(box, boxes, playerOne, playerTwo) {
    let valid = false;
    while (!valid) {
        if (box.innerText === "") {
            box.innerText = turnOrder ? playerOne.symbol : playerTwo.symbol;
            valid = true;
        }
        else {pass;}
    }

    turnOrder = !turnOrder;
    gameBoard.symbols[Number(box.id)] = box.innerText;
    if (checkForWin(gameBoard.symbols)) {
        document.getElementById("end-window").style.display = "block";
        if (checkForWin(gameBoard.symbols) === 1) {
            document.getElementById("message").innerText = "It's a tie!";
        }
        else {
            for (let index of checkForWin(gameBoard.symbols)) {
                boxes[index].style.backgroundColor = "yellow";
            }

            let win_player;
            if (box.innerText.includes("X")) {
                win_player = "Player 1 wins!";
            }
            else {
                win_player = "Player 2 wins!";
            }
            document.getElementById("message").innerText = win_player;
        }
    }
}