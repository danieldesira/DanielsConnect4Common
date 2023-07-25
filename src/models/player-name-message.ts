import { GameMessage } from "./game-message";

export class PlayerNameMessage extends GameMessage {
    /**
     * @param name The name of the player
     */
    public constructor(name: string) {
        super();
        this.name = name;
    }

    public name: string;
}