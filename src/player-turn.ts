/**
 * Randomises player number
 * @returns {number} Random player number (1 or 2)
 */
export function randomiseTurn(): number {
    return Math.floor(Math.random() * 2) + 1;
}

/**
 * Switches turn depending on input
 * @param {number} currentTurn - The current player number (1 or 2)
 * @returns {number} The opposing player number (1 -> 2 or 2 -> 1)
 */
export function switchTurn(currentTurn: number): number {
    return currentTurn === 1 ? 2 : 1;
}