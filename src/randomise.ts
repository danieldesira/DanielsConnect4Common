import { Dot } from "./enums/dot";

export function randomiseColor(): Dot {
    return Math.floor(Math.random() * 2) + 1;
}