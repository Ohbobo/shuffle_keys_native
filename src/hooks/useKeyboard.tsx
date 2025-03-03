import { useState, useEffect } from "react";
import { type KeyboardProps } from "../types/keyboard";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useKeyboard = ({ letterKeys, charsKeys }: KeyboardProps) => {
  const [keyboardState, setKeyboardState] = useState(letterKeys.split(""),);
  const isCharsKeys = useSelector((state: RootState) => state.keyboardModeReducer.isCharsKeys);

  const firstLine = keyboardState.slice(0, 10);
  const secondLine = keyboardState.slice(10, 20);
  const thirdLine = keyboardState.slice(20, 26);

  useEffect(() => {
    const newKeyboardState = isCharsKeys ? charsKeys.split("") : letterKeys.split("");
    if (newKeyboardState.join('') !== keyboardState.join('')) {
      setKeyboardState(newKeyboardState);
    }
  }, [isCharsKeys, charsKeys, letterKeys]);

  return {
    firstLine,
    secondLine,
    thirdLine,
    keyboardState,
  };
};
