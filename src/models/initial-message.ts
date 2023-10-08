import { Coin } from "../enums/coin";
import { BoardDimensions } from "../enums/dimensions";
import { GameMessage } from "./game-message";

export interface InitialMessage extends GameMessage {
    gameId: number;
    playerName: string;
    opponentName: string;
    color: Coin;
    dimensions: BoardDimensions;
}