import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    shadow: ""
}

const shadowSlice = createSlice({
    name: "shadow",
    initialState,
    reducers: {
        handleChangeShadow(state, action: PayloadAction<string>) {
            state.shadow = action.payload;
        }
    }
})

export const { handleChangeShadow } = shadowSlice.actions; 
export default shadowSlice.reducer