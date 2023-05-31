import GameMessage from "./game-message";

export default class TieMessage extends GameMessage {
    public constructor(tie: boolean = true) {
        super();
        this.tie = tie;
    }

    public tie: boolean;
}