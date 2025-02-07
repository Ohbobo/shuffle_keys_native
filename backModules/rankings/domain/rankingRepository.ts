import { Mode } from "../../../src/types/links";
import { IRanking } from "./rankingModel";

export interface IRankingRepository {
    getAllRankSorted(mode: Mode): Promise<IRanking[]>;
    getBestOfFiveRank(mode: Mode): Promise<IRanking[]>;
}