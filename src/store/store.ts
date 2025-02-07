import { configureStore } from "@reduxjs/toolkit";
import sentenceReducer from "./features/sentences";
import modeSliceReducer from './features/gameMode';
import scoreSliceReducer from './features/score';
import rankingSliceReducer from "./features/ranking";
import gameModeSliceReducer from "./features/links";

export const store = configureStore({
    reducer: {
        sentenceReducer,
        modeSliceReducer,
        scoreSliceReducer,
        rankingSliceReducer,
        gameModeSliceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;