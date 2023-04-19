import { BoardLogic } from "./board-logic";
import { Dot } from "./enums/dot";
import { ActionMessage } from "./models/action-message";
import { GameMessage } from "./models/game-message";
import { InactivityMessage } from "./models/inactivity-message";
import { InitialMessage } from "./models/initial-message";
import { PlayerNameMessage } from "./models/player-name-message";
import { SkipTurnMessage } from "./models/skip-turn-message";
import { TieMessage } from "./models/tie-message";
import { WinnerMessage } from "./models/winner-message";

export const DanielsConnect4Common = {
    BoardLogic,
    Dot,
    ActionMessage,
    GameMessage,
    InactivityMessage,
    InitialMessage,
    SkipTurnMessage,
    WinnerMessage,
    TieMessage,
    PlayerNameMessage
};