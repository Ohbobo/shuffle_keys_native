import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Mode, ModeState } from "../../types/links";

const initialState: ModeState = {
  value: "classic",
  timer: 0,
  isRunning: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<{ mode: Mode; time: number }>) => {
      state.value = action.payload.mode;
      state.timer = action.payload.time;
      state.isRunning = false;
    },
    decrementTime: (state) => {
      if (state.timer > 0) {
        state.timer -= 1;
      } else {
        state.isRunning = false;
      }
      console.log(state.timer)
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
      state.isRunning = false;
    },
  },
});

export const { setMode, decrementTime, startTimer, stopTimer, resetTimer } = modeSlice.actions;
export default modeSlice.reducer;