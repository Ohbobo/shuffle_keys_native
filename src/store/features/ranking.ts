import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRanking } from "../../../backModules/rankings/domain/rankingModel";
import { Mode } from "../../types/links";

interface RankingState {
    rankings: Record<Mode, IRanking[]>
}

const initialState: RankingState = {
    rankings: {
        classic: [],
        random: [],
        blind: [],
    }
};

export const rankingSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        setRankings: (state, action: PayloadAction<{ mode: Mode; rankings: IRanking[] }>) => {
            state.rankings[action.payload.mode] = action.payload.rankings;
        }
    }
})

export const { setRankings } = rankingSlice.actions;
export default rankingSlice.reducer;