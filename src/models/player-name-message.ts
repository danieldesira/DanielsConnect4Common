import { GameMessage } from "./game-message";

/**
 * @class PlayerNameMessage model
 * @extends GameMessage
 */
export class PlayerNameMessage extends GameMessage {
    /**
     * @constructor
     * @public
     * @param name The name of the player
     */
    public constructor(name: string) {
        super();
        this.name = name;
    }

    /**
     * @property {string} name - The name of the player
     * @public
     */
    public name: string;
}