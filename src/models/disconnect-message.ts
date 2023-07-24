import { GameMessage } from "./game-message";

/**
 * @class DisconnectMessage model
 * @extends GameMessage
 */
export class DisconnectMessage extends GameMessage {
    /**
     * @constructor
     * @public
     */
    public constructor() {
        super();
        this.hardDisconnect = true;
    }

    /**
     * @property {boolean} hardDisconnect - Whether the given client has disconnected
     */
    public hardDisconnect: boolean;
}