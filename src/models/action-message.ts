import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

/**
 * @class ActionMessage model
 * @extends GameMessage
 */
export class ActionMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {number} column - The column number 
     * @param {string} action - The type of action 
     * @param {Coin} color - The coin color
     */
    public constructor(column: number, action: string, color: Coin) {
        super();
        this.column = column;
        this.action = action;
        this.color = color;
    }

    /**
     * @property {number} column - The column number
     * @public
     */
    public column: number;

    /**
     * @property {string} action - The type of action
     * @public
     */
    public action: string;

    /**
     * @property {Coin} color - The coin color
     * @public
     */
    public color: Coin;
}