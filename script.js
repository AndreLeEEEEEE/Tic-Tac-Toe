import {gameBoard} from "./gameBoard.js"
import {displayBoard} from "./displayBoard.js"

let player = (symbol) => {
    return { symbol };
}

displayBoard(gameBoard.symbols);