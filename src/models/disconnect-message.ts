import GameMessage from "./game-message";

export default class DisconnectMessage extends GameMessage {
    public constructor() {
        super();
        this.hardDisconnect = true;
    }

    public hardDisconnect: boolean;
}