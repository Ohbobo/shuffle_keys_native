import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isUpperCase: false,
    isCharsKeys: false
}

const keyboardModeSlice = createSlice({
    name: "keyboardMode",
    initialState,
    reducers: {
        toogleUpperCase: (state) => {
            state.isUpperCase = !state.isUpperCase;
        },
        toogleCharsKeys: (state) => {
            state.isCharsKeys = !state.isCharsKeys;
        },
        resetKeyboardMode: (state) => {
            return initialState;
        }   
    }
});

export const { toogleUpperCase, toogleCharsKeys } = keyboardModeSlice.actions;
export default keyboardModeSlice.reducer;