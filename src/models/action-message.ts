import GameMessage from "./game-message";

export default class ActionMessage extends GameMessage {
    public constructor(column: number, action: string) {
        super();
        this.column = column;
        this.action = action;
    }

    public column: number;
    public action: string;
}