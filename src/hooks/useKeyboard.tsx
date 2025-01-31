import { useState, useEffect } from "react";
import { type KeyboardProps } from "../types/keyboard";

export const useKeyboard = ({ letterKeys, charsKeys }: KeyboardProps) => {
  const [keyboardState, setKeyboardState] = useState({
    isUpperCase: false,
    isCharac: false,
    keys: letterKeys.split(""),
  });

  useEffect(() => {
    setKeyboardState((prev) => ({
      ...prev,
      keys: prev.isCharac ? charsKeys.split("") : letterKeys.split(""),
    }));
  }, [keyboardState.isCharac, charsKeys, letterKeys]);

  const toogleUpperCase = () => {
    setKeyboardState((prev) => ({
      ...prev,
      isUpperCase: !prev.isUpperCase,
    }));
  };

  const toogleCharacKeys = () => {
    setKeyboardState((prev) => ({
      ...prev,
      isCharac: !prev.isCharac,
    }));
  };

  return {
    keyboardState,
    toogleCharacKeys,
    toogleUpperCase,
  };
};
