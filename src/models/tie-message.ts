import { GameMessage } from "./game-message";

/**
 * @class TieMessage model
 * @exports GameMessage
 */
export class TieMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param {boolean} tie - Optional boolean parameter to determine if tie. True by default.
     */
    public constructor(tie: boolean = true) {
        super();
        this.tie = tie;
    }

    /**
     * @property {boolean} tie - Determines if tie
     * @public
     */
    public tie: boolean;
}