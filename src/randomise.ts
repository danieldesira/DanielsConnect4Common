import { Dot } from "./enums/dot";

export default function randomiseColor(): Dot {
    return Math.floor(Math.random() * 2) + 1;
}