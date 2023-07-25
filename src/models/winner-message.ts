import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class WinnerMessage model
 * @extends GameMessage
 */
export class WinnerMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {Coin} winner - The coin color of the winner
     */
    public constructor(winner: Coin) {
        super();
        this.winner = winner;
    }

    /**
     * @property {Coin} winner - The coin color of the winner
     * @public
     */
    public winner: Coin;
}