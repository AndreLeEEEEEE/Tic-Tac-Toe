let turnOrder = false;
export function nextTurn() {
    turnOrder = !turnOrder;
    return turnOrder;
}