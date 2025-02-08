import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinksGroupProps } from "../../types/links";

interface GameModeState  {
    modes: LinksGroupProps[];
    selectedModeIndex: number;
}

const initialState: GameModeState = {
    modes: [
        { description: "Classique", mode: "classic", path:"classic", time: 6000 },
        { description: "Aléatoire", mode: "random", path:"random", time: 90 },
        { description: "Aveugle", mode: "blind", path:"blind", time: 5 },
    ],
    selectedModeIndex: 0
}

const gameModeSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        setModes(state, action: PayloadAction<number>) {
            state.selectedModeIndex = action.payload;
            console.log(state)
        },
        selectMode(state, action: PayloadAction<number>) {
            state.selectedModeIndex = action.payload;
            console.log(state)
        },
        resetGameState(state) {
            return initialState;
        }
    }
});

export const { setModes, selectMode, resetGameState } = gameModeSlice.actions;
export default gameModeSlice.reducer;