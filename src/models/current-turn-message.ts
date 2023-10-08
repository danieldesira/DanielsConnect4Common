import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export interface CurrentTurnMessage extends GameMessage {
    currentTurn: Coin;
}