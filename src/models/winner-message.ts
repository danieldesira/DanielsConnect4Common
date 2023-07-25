import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class WinnerMessage model
 */
export class WinnerMessage extends GameMessage {
    /**
     * @param {Coin} winner - The coin color of the winner
     */
    public constructor(winner: Coin) {
        super();
        this.winner = winner;
    }

    public winner: Coin;
}