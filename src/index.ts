import BoardLogic from "./board-logic";
import { Coin } from "./enums/coin";
import ActionMessage from "./models/action-message";
import CurrentTurnMessage from "./models/current-turn-message";
import DisconnectMessage from "./models/disconnect-message";
import GameMessage from "./models/game-message";
import InitialMessage from "./models/initial-message";
import PlayerNameMessage from "./models/player-name-message";
import SkipTurnMessage from "./models/skip-turn-message";
import TieMessage from "./models/tie-message";
import WinnerMessage from "./models/winner-message";
import { randomiseColor, switchTurn } from "./player-turn";

export const DanielsConnect4Common = {
    BoardLogic,
    Coin,
    ActionMessage,
    GameMessage,
    InitialMessage,
    SkipTurnMessage,
    WinnerMessage,
    TieMessage,
    PlayerNameMessage,
    CurrentTurnMessage,
    DisconnectMessage,
    randomiseColor,
    switchTurn
};