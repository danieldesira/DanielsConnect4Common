import { Coin } from "../enums/coin";
import GameMessage from "./game-message";

export default class InactivityMessage extends GameMessage {
    public constructor(endGame: boolean, currentTurn: Coin) {
        super();
        this.endGameDueToInactivity = endGame;
        this.currentTurn = currentTurn;
    }

    public endGameDueToInactivity: boolean;
    public currentTurn: Coin;
}