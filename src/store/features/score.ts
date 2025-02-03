import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Score {
    score: number;
}

const initialState: Score = {
    score: 0
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        incrementScore(state, action: PayloadAction<number>) {
            state.score += action.payload;
        },
        resetScore(state) {
            state.score = 0;
        }
    }
});

export const { incrementScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;