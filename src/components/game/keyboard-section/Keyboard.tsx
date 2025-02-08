import { View, StyleSheet } from "react-native";

import { KeyboardProps } from "../../../types/keyboard";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deleteLastKey } from "../../../store/features/sentences";
import { addKey } from "../../../store/features/sentences";

import { useKeyboard } from "../../../hooks/useKeyboard";

import { Ionicons } from "@expo/vector-icons";
import KeyboardSimpleTouch from "./KeyboardSimpleTouch";
import KeyboardFunctionTouch from "./KeyboardFunctionTouch";
import KeyboardSpaceBarContainer from "./KeyboardSpaceBarContainer";

export default function Keyboard({ letterKeys, charsKeys }: KeyboardProps) {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.modeSliceReducer.value);

  const { keyboardState, toogleUpperCase, toogleCharacKeys, firstLine, secondLine, thirdLine } = useKeyboard({
    letterKeys,
    charsKeys,
  });

  const { isCharac, isUpperCase } = keyboardState;

  const handleAddLetter = (letter: string) => {
    const letterToAdd = isUpperCase ? letter.toUpperCase() : letter;
    dispatch(addKey(letterToAdd));
  };

  return (
    <View style={style.keyboardContainer}>
      <View style={style.keyboardRow}>
        {firstLine.map((key, i) => (
          <KeyboardSimpleTouch
            fn={() => handleAddLetter(key)}
            key={i}
            text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key}
          />
        ))}
      </View>
      <View style={style.keyboardRow}>
        {secondLine.map((key, i) => (
          <KeyboardSimpleTouch
            fn={() => handleAddLetter(key)}
            key={i}
            text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key}
          />
        ))}
      </View>
      <View style={style.thirdRow}>
        <KeyboardFunctionTouch
          onClick={toogleUpperCase}
          icon={
            isUpperCase ? (
              <Ionicons name="arrow-down-outline"></Ionicons>
            ) : (
              <Ionicons name="arrow-up-outline"></Ionicons>
            )
          }
          style={style.functionKey}
        />
        <View style={style.lettersContainer}>
          {thirdLine.map((key, i) => (
            <KeyboardSimpleTouch
              fn={() => handleAddLetter(key)}
              key={i}
              text={
                mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key
              }
            />
          ))}
          {!isCharac && (
            <KeyboardSimpleTouch
              fn={() => handleAddLetter("'")}
              text={
                mode === "blind" ? "" : "'"
              }
            />
          )}
        </View>
        <KeyboardFunctionTouch
          onClick={() => dispatch(deleteLastKey())}
          icon={<Ionicons name="backspace-outline"></Ionicons>}
          style={style.functionKey}
        />
      </View>
      <KeyboardSpaceBarContainer isChars={isCharac} fn={toogleCharacKeys}/>
    </View>
  );
}

const style = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: "#000000",
    width: "100%",
    height: "auto",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 7,
    paddingVertical: 30,
    borderRadius: 15,
  },
  keyboardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  },
  thirdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  lettersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  },
  adjustedKey: {
    flexGrow: 1,
    maxWidth: "10%",
    minWidth: 28,
    marginHorizontal: 4, 
  },
  functionKey: {
    flexGrow: 1,
  },
});
