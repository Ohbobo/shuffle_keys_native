
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    textValue: "",
    color: "#202020",
    isIcon: true,
    selectedIcon: "Moon",
    iconSize: 50,
}

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        toogleIcon(state){
            state.isIcon = !state.isIcon;
        },
        handleChangeIcon(state, action: PayloadAction<string>) {
            state.selectedIcon = action.payload;
        },
        handleChangeTextColor(state, action: PayloadAction<string>) {
            state.color = action.payload;
        },
        handleChangeIconSize(state, action: PayloadAction<number>) {
            state.iconSize = action.payload;
        }
    }
})

export const { handleChangeTextColor, toogleIcon, handleChangeIcon, handleChangeIconSize } = textSlice.actions;
export default textSlice.reducer;