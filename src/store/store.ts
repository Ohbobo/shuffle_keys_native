import { configureStore } from "@reduxjs/toolkit";
import sentenceReducer from "./features/sentences";
import modeSliceReducer from './features/gameMode';
import scoreSliceReducer from './features/score';
import rankingSliceReducer from "./features/ranking";
import gameModeSliceReducer from "./features/links";
import keyboardModeReducer from "./features/keyboardMode";

//avatar
import backgroundSliceReducer from './features/avatar/background';
import borderSliceReducer from './features//avatar/border'
import shadowSliceReducer from "./features/avatar/shadow"
import iconSliceReducer from './features/avatar/icon'

export const store = configureStore({
    reducer: {
        sentenceReducer,
        modeSliceReducer,
        scoreSliceReducer,
        rankingSliceReducer,
        gameModeSliceReducer,
        keyboardModeReducer,
        backgroundSliceReducer,
        borderSliceReducer,
        shadowSliceReducer,
        iconSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;