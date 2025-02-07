import { Mode } from "../../../src/types/links";
import { IRanking } from "./rankingModel";
import { IRankingRepository } from "./rankingRepository";

export class RankingService {
    constructor(private readonly iRankRepository: IRankingRepository) {}

    async getRankings(mode: Mode): Promise<IRanking[]> {
        return this.iRankRepository.getAllRankSorted(mode);
    }

    async getBestOffiveRank(mode: Mode): Promise<IRanking[]> {
        return this.iRankRepository.getBestOfFiveRank(mode);
    }
}