import { GameMessage } from "./game-message";

export interface DisconnectMessage extends GameMessage {
    hardDisconnect: boolean;
}