import { Coin } from "./enums/coin";

/**
 * Randomises color
 * @returns {Coin} Random coin color
 */
export function randomiseColor(): Coin {
    return Math.floor(Math.random() * 2) + 1;
}

/**
 * Switches turn depending on input
 * @param {Coin} currentTurn - The current coin color
 * @returns {Coin} The opposing coin color
 */
export function switchTurn(currentTurn: Coin): Coin {
    return currentTurn === Coin.Red ? Coin.Green : Coin.Red;
}