import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

export const sentenceSlice = createSlice({
    name: "sentence",
    initialState,
    reducers: {
        addKey: (state, action: PayloadAction<string>) => {
            state.value += action.payload;
        },
        deleteLastKey: (state) => {
            if(state.value.length > 0) {
                state.value = state.value.slice(0, -1);
            }
        },
        resetState: (state) => {
            state.value = "";
        },
        addSpace: (state) => {
            state.value += " ";
        }
    }
});

export const { addKey, deleteLastKey, resetState, addSpace } = sentenceSlice.actions;
export default sentenceSlice.reducer;