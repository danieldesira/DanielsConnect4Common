import { GameMessage } from "./game-message";

export class TieMessage extends GameMessage {
    /**
     * @param {boolean} tie - Optional boolean parameter to determine if tie. True by default.
     */
    public constructor(tie: boolean = true) {
        super();
        this.tie = tie;
    }

    public tie: boolean;
}