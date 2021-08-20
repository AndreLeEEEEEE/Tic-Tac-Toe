export function checkForWin(gameArray) {
    if (checkLine(gameArray, 0, 1, 2)) {return [0, 1, 2];}
    else if (checkLine(gameArray, 3, 4, 5)) {return [3, 4, 5];}
    else if (checkLine(gameArray, 6, 7, 8)) {return [6, 7, 8];}
    else if (checkLine(gameArray, 0, 3, 6)) {return [0, 3, 6];}
    else if (checkLine(gameArray, 1, 4, 7)) {return [1, 4, 7];}
    else if (checkLine(gameArray, 2, 5, 8)) {return [2, 5, 8];}
    else if (checkLine(gameArray, 0, 4, 8)) {return [0, 4, 8];}
    else if (checkLine(gameArray, 2, 4, 6)) {return [2, 4, 6];}
    else if (checkTie(gameArray)) {return 1;}
    else {return false;}
}

function checkLine(gameArray, idx1, idx2, idx3) {
    if (gameArray[idx1] !== "" &&
        gameArray[idx1] === gameArray[idx2] && 
        gameArray[idx2] === gameArray[idx3]) {
        return true;
    }
    return false;
}

function checkTie(gameArray) {
    if (gameArray.includes("")) {
        return false;
    }
    return true;
}