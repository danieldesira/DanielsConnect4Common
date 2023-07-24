import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class CurrentTurnMessage model
 * @extends GameMessage
 */
export class CurrentTurnMessage extends GameMessage {
    /**
     * @constructor
     * @public
     */
    public constructor() {
        super();
        this.currentTurn = Coin.Empty;
    }

    /**
     * @property {Coin} currentTurn - The coin color of the current turn
     */
    public currentTurn: Coin;
}