import { Dot } from "../enums/dot";
import GameMessage from "./game-message";

export default class WinnerMessage extends GameMessage {
    public constructor(winner: Dot) {
        super();
        this.winner = winner;
    }

    public winner: Dot;
}