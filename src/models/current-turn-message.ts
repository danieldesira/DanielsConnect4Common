import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export class CurrentTurnMessage extends GameMessage {
    public constructor() {
        super();
        this.currentTurn = Coin.Empty;
    }

    public currentTurn: Coin;
}