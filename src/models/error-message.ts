import { GameMessage } from "./game-message";

export interface ErrorMessage extends GameMessage {
    error: string;
}