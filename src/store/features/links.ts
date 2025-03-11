import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinksGroupProps } from "../../types/links";

interface GameModeState {
  modes: LinksGroupProps[];
  selectedModeIndex: number;
}

const initialState: GameModeState = {
  modes: [
    {
      title: "Classique",
      mode: "classic",
      path: "classic",
      time: 6000,
      description:
        "Écrivez les mots le plus rapidement en 90 secondes avec un clavier classique",
    },
    {
      title: "Aléatoire",
      mode: "random",
      path: "random",
      time: 90,
      description:
        "Écrivez les mots le plus rapidement en 90 secondes avec un clavier aléatoire",
    },
    {
      title: "Aveugle",
      mode: "blind",
      path: "blind",
      time: 5,
      description:
        "Écrivez les mots le plus rapidement en 90 secondes sans les caractères affichés sur les touches",
    },
  ],
  selectedModeIndex: 0,
};

const gameModeSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setModes(state, action: PayloadAction<number>) {
      state.selectedModeIndex = action.payload;
      console.log(state);
    },
    selectMode(state, action: PayloadAction<number>) {
      state.selectedModeIndex = action.payload;
      console.log(state);
    },
    resetGameState(state) {
      return initialState;
    },
  },
});

export const { setModes, selectMode, resetGameState } = gameModeSlice.actions;
export default gameModeSlice.reducer;
