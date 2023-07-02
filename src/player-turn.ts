import { Coin } from "./enums/coin";

export function randomiseColor(): Coin {
    return Math.floor(Math.random() * 2) + 1;
}

export function switchTurn(currentTurn: Coin): Coin {
    return currentTurn === Coin.Red ? Coin.Green : Coin.Red;
}