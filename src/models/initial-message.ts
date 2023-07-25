import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class InitialMessage model
 * @extends GameMessage
 */
export class InitialMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {number} gameId - The ID of the game
     * @param {string} opponentName - The name of the opponent
     * @param {Coin} color - The coin color chosen
     */
    public constructor(gameId: number, opponentName: string, color: Coin) {
        super();
        this.gameId = gameId;
        this.opponentName = opponentName;
        this.color = color;
    }

    /**
     * @property {number} gameId - The ID of the game
     * @public
     */
    public gameId: number;

    /**
     * @property {string} opponentName - The name of the opponent
     * @public
     */
    public opponentName: string;

    /**
     * @property {Coin} color - The coin color chosen
     * @public
     */
    public color: Coin;
}