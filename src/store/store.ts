import { configureStore } from "@reduxjs/toolkit";
import sentenceReducer from "./features/sentences";
import modeSliceReducer from './features/gameMode';
import scoreSliceReducer from './features/score';

export const store = configureStore({
    reducer: {
        sentenceReducer,
        modeSliceReducer,
        scoreSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;