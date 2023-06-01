import { Coin } from "../enums/coin";
import GameMessage from "./game-message";

export default class InitialMessage extends GameMessage {
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