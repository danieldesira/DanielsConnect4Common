import { Coin } from "../enums/coin";
import GameMessage from "./game-message";

export default class SkipTurnMessage extends GameMessage {
    public constructor(skipTurn: boolean, currentTurn: Coin) {
        super();
        this.skipTurn = skipTurn;
        this.currentTurn = currentTurn;
    }

    public skipTurn: boolean;
    public currentTurn: Coin;
}