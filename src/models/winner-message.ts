import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export interface WinnerMessage extends GameMessage {
    winner: Coin;
}