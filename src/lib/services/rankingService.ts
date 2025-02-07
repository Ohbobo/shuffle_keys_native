import { useQuery } from "@tanstack/react-query";
import { InMemoryRanking } from "../../../backModules/rankings/infra/InMemoryRanking";
import { Mode } from "../../types/links";

const rankingRepo = new InMemoryRanking();

export const fetchRankings = async (mode: Mode) => {
    return await rankingRepo.getBestOfFiveRank(mode);
}

export const useRankingsQuery = (mode: Mode) => {
    return useQuery({
        queryKey: ["rankings", mode],
        queryFn: () => fetchRankings(mode),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10
    })
}