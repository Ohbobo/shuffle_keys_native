import { Mode } from "../types/links";
import { RootState } from "../store/store";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode, startTimer, decrementTime, stopTimer } from "../store/features/gameMode";

export const useGame = (mode: Mode, time: number) => {
  const dispatch = useDispatch();
  const { timer, isRunning } = useSelector((state: RootState) => state.modeSliceReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGame = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(setMode({ mode, time }));
      dispatch(startTimer());
      setLoading(false);
    };

    loadGame();
  }, [dispatch, mode, time]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }

    // Si le timer atteint 0, on stoppe l'intervalle
    if (timer === 0 && isRunning) {
      dispatch(stopTimer());
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timer, dispatch]);

  return { timer, isRunning, loading };
};
