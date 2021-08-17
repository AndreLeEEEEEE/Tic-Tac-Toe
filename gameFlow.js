export function setupGame (gameBoard, player, displayBoard) {
    displayBoard(gameBoard.symbols);
    let playerOne = player("A", "X");
    let playerTwo = player("B", "O");
    let turnOrder = false;

    return { playerOne, playerTwo, turnOrder};
}

export function playTurn() {

}