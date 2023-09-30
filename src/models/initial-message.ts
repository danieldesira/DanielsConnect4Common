import { Coin } from "../enums/coin";
import { BoardDimensions } from "../enums/dimensions";
import { GameMessage } from "./game-message";

export class InitialMessage extends GameMessage {
    /**
     * @param {number} gameId - The ID of the game
     * @param {string} playerName - The name of the player
     * @param {string} opponentName - The name of the opponent
     * @param {Coin} color - The coin color chosen
     * @param {BoardDimensions} dimensions - The game's chosen dimensions
     */
    public constructor(gameId: number,
                    playerName: string,
                    opponentName: string,
                    color: Coin,
                    dimensions: BoardDimensions) {
        super();
        this.gameId = gameId;
        this.playerName = playerName;
        this.opponentName = opponentName;
        this.color = color;
        this.dimensions = dimensions;
    }

    public gameId: number;
    public playerName: string;
    public opponentName: string;
    public color: Coin;
    public dimensions: BoardDimensions;
}