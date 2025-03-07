import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    border: "",
    borderWidth: 0,
    borderColor: "#202020",
    rounded: 0
}

const borderSlice = createSlice({
    name: "border",
    initialState,
    reducers: {

        handleChangeBorderColor(state, action: PayloadAction<string>){
            state.borderColor = action.payload;
        },
        handleChangeBorderRadius(state, action: PayloadAction<number>){
            state.rounded = action.payload;
        },
        handleChangeBorderWidth(state, action: PayloadAction<number>){
            state.borderWidth = action.payload;
        }

    }
})

export const { handleChangeBorderColor, handleChangeBorderRadius, handleChangeBorderWidth } = borderSlice.actions;
export default borderSlice.reducer;