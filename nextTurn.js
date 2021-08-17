let turnOrder = true;
export function nextTurn() {
    turnOrder = !turnOrder;
    return turnOrder;
}