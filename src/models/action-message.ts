import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export interface ActionMessage extends GameMessage {
    column: number;
    action: string;
    color: Coin;
}