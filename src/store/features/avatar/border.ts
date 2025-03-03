import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    border: "",
    borderEffect: "",
    borderColor: "border-[#202020]",
    rounded: ""
}

const borderSlice = createSlice({
    name: "border",
    initialState,
    reducers: {

        handleChangeBorderColor(state, action: PayloadAction<string>){
            state.borderColor = action.payload;
        },
        handleChangeBorderRadius(state, action: PayloadAction<string>){
            state.rounded = action.payload;
        },
        handleChangeBorderEffect(state, action: PayloadAction<string>){
            state.borderEffect = action.payload;
        }

    }
})

export const { handleChangeBorderColor, handleChangeBorderRadius, handleChangeBorderEffect } = borderSlice.actions;
export default borderSlice.reducer;