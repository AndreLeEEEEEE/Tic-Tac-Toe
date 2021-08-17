export function displayBoard(gameArray) {
    let id = 1;
    for (let symbol of gameArray) {
        document.getElementById(id).innerText = symbol;
        ++id;
    }
}