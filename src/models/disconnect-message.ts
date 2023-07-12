import { GameMessage } from "./game-message";

export class DisconnectMessage extends GameMessage {
    public constructor() {
        super();
        this.hardDisconnect = true;
    }

    public hardDisconnect: boolean;
}