import { Coin } from "../enums/coin";
import { GameMessage } from "./game-message";

export class WinnerMessage extends GameMessage {
    public constructor(winner: Coin) {
        super();
        this.winner = winner;
    }

    public winner: Coin;
}