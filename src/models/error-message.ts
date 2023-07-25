import { GameMessage } from "./game-message";

export class ErrorMessage extends GameMessage {
    /**
     * @param {string} error The error message
     */
    public constructor(error: string) {
        super();
        this.error = error;
    }
    
    public error: string;
}