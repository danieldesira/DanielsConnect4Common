import { GameMessage } from "./game-message";

/**
 * @class ErrorMessage model
 * @extends GameMessage
 */
export class ErrorMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {string} error The error message
     */
    public constructor(error: string) {
        super();
        this.error = error;
    }

    /**
     * @property {string} error The error message
     * @public
     */
    public error: string;
}