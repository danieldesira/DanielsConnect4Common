import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export class InitialMessage extends GameMessage {
    /**
     * @param {number} gameId - The ID of the game
     * @param {string} opponentName - The name of the opponent
     * @param {Coin} color - The coin color chosen
     */
    public constructor(gameId: number, opponentName: string, color: Coin) {
        super();
        this.gameId = gameId;
        this.opponentName = opponentName;
        this.color = color;
    }

    public gameId: number;
    public opponentName: string;
    public color: Coin;
}