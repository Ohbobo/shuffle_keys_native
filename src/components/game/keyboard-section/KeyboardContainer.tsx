import { useSelector } from "react-redux";
import { letterKeys } from "../../../data/keys";
import { characKeys } from "../../../data/keys";
import { RootState } from "../../../store/store";
import { shuffleArrayToString } from "../../../utils/random/shuffleArrayToString";
import { useMemo } from "react";
import Keyboard from "./Keyboard";

export default function KeyboardContainer() {
  const mode = useSelector((state: RootState) => state.modeSliceReducer.value);
  const randomKeys = (keys: string) => {
    return useMemo(() => shuffleArrayToString(keys), []);
  }
  const lettersKeys = mode === "random" ? randomKeys(letterKeys) : letterKeys;
  const charsKeys = mode === "random" ? randomKeys(characKeys) : characKeys;

  return <Keyboard letterKeys={lettersKeys} charsKeys={charsKeys}/>
}
