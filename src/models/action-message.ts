import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export class ActionMessage extends GameMessage {
    public constructor(column: number, action: string, color: Coin) {
        super();
        this.column = column;
        this.action = action;
        this.color = color;
    }

    public column: number;
    public action: string;
    public color: Coin;
}