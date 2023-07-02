import GameMessage from "./game-message";

export default class ErrorMessage extends GameMessage {
    public constructor(error: string) {
        super();
        this.error = error;
    }

    public error: string;
}