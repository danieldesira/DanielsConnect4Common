import { BoardDimensions } from "../enums/dimensions";
import { Themes } from "../enums/themes";

export interface PlayerInfo {
    user: string;
    picUrl: string;
}

export interface PlayerSettings {
    dimensions: BoardDimensions;
    theme: Themes;
}