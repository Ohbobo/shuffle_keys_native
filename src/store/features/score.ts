import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Score {
    score: number;
    completeCountScore: number
}

const initialState: Score = {
    score: 0,
    completeCountScore: 0
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        incrementScore(state, action: PayloadAction<number>) {
            state.score += action.payload;
            state.completeCountScore++
        },
        resetScore(state) {
            state.score = 0;
            state.completeCountScore = 0;
        }
    }
});

export const { incrementScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;