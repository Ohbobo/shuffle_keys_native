import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isGradient: false,
    bg: "#FFDCD3",
    gradient1: "#EB8E90",
    gradient2: "#D2DEFF",
}

const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        toogleGradientColor(state) {
            state.isGradient = !state.isGradient;
        },
        handleChangeGradientColors(state, action: PayloadAction<{ index: number, color: string }>) {
            action.payload.index === 1 ? state.gradient1 = action.payload.color : state.gradient2 = action.payload.color
        },
        handleChangeBackground(state, action: PayloadAction<string>) {
            state.bg = action.payload;
        },
    }
});

export const { toogleGradientColor, handleChangeBackground, handleChangeGradientColors } = backgroundSlice.actions;
export default backgroundSlice.reducer;