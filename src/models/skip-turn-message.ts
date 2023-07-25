import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class SkipTurnMessage model
 * @extends GameMessage
 */
export class SkipTurnMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {boolean} skipTurn - Whether to skip the current turn
     * @param {Coin} currentTurn - Coin color to be the new turn
     */
    public constructor(skipTurn: boolean, currentTurn: Coin) {
        super();
        this.skipTurn = skipTurn;
        this.currentTurn = currentTurn;
    }

    /**
     * @property {boolean} skipTurn - Whether to skip the current turn
     * @public
     */
    public skipTurn: boolean;

    /**
     * @property {Coin} currentTurn - Coin color to be the new turn
     * @public
     */
    public currentTurn: Coin;
}