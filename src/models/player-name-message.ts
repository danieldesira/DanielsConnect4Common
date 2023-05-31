import GameMessage from "./game-message";

export default class PlayerNameMessage extends GameMessage {
    public constructor(name: string) {
        super();
        this.name = name;
    }

    public name: string;
}