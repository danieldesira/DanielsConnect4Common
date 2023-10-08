import { GameMessage } from "./game-message";

export interface TieMessage extends GameMessage {
    tie: boolean;
}