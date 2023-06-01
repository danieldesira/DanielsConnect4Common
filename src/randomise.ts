import { Coin } from "./enums/coin";

export default function randomiseColor(): Coin {
    return Math.floor(Math.random() * 2) + 1;
}