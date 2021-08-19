export function displayBoard(gameArray) {
    let id = 0;
    for (let symbol of gameArray) {
        document.getElementById(id).innerText = symbol;
        ++id;
    }
}