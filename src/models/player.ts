import { BoardDimensions } from "../enums/dimensions";

export interface PlayerInfo {
    user: string;
    picUrl: string;
    dimensions: BoardDimensions;
    isTokenValid: boolean;
}