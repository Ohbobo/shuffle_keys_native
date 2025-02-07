import { Mode } from "../../../src/types/links";

export interface Scores {
    mode: Mode
    score: number;
}

export interface IRanking {
    username: string;
    tag: string;
    score: Scores[];
}