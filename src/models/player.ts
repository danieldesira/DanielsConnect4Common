import { BoardDimensions } from "../enums/dimensions";

export interface PlayerInfo {
    user: string;
    picUrl: string;
}

export interface PlayerSettings {
    dimensions: BoardDimensions;
}