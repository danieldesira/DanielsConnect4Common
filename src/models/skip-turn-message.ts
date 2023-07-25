import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export class SkipTurnMessage extends GameMessage {
    /**
     * @param {boolean} skipTurn - Whether to skip the current turn
     * @param {Coin} currentTurn - Coin color to be the new turn
     */
    public constructor(skipTurn: boolean, currentTurn: Coin) {
        super();
        this.skipTurn = skipTurn;
        this.currentTurn = currentTurn;
    }

    public skipTurn: boolean;
    public currentTurn: Coin;
}