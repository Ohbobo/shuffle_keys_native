import { View, StyleSheet } from "react-native";
import { useKeyboard } from "../../../hooks/useKeyboard";
import { Ionicons } from "@expo/vector-icons";
import KeyboardSimpleTouch from "../../game/keyboard-section/KeyboardSimpleTouch";
import KeyboardFunctionTouch from "../../game/keyboard-section/KeyboardFunctionTouch";
import KeyboardSpaceBarContainer from "../../game/keyboard-section/KeyboardSpaceBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { toogleUpperCase } from "../../../store/features/keyboardMode";

export default function FakeKeyboard({ letterKeys, charsKeys, mode }: { letterKeys: string, charsKeys: string, mode: string }) {
  const dispatch = useDispatch();
  const { isUpperCase, isCharsKeys } = useSelector((state: RootState) => state.keyboardModeReducer);
  const { firstLine, secondLine, thirdLine } = useKeyboard({
    letterKeys,
    charsKeys,
  });
 
  return (
    <View style={[style.keyboardContainer]}>
      <View style={style.keyboardRow}>
        {firstLine.map((key, i) => (
          <KeyboardSimpleTouch key={i} text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key} />
        ))}
      </View>

      {/* Deuxième ligne */}
      <View style={style.keyboardRow}>
        {secondLine.map((key, i) => (
          <KeyboardSimpleTouch key={i} text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key} />
        ))}
      </View>

      <View style={style.thirdRow}>
        <KeyboardFunctionTouch
          onClick={() => dispatch(toogleUpperCase())}
          icon={isUpperCase ? <Ionicons name="arrow-down-outline" size={14} /> : <Ionicons name="arrow-up-outline" size={14} />}
          style={style.functionKey}
        />

        <View style={style.lettersContainer}>
          {thirdLine.map((key, i) => (
            <KeyboardSimpleTouch
              key={i}
              text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key}
            />
          ))}
          {!isCharsKeys && (
            <KeyboardSimpleTouch text={mode === "blind" ? "" : "'"} />
          )}
        </View>

        <KeyboardFunctionTouch
          icon={<Ionicons name="backspace-outline" size={14} />}
          style={style.functionKey}
        />
      </View>
      <KeyboardSpaceBarContainer />
    </View>
  );
}

const style = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: "black",
    flexDirection: "column",
    width: "95%",
    maxWidth: 400,
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 15,
  },
  keyboardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  },
  lettersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  },
  thirdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  functionKey: {
    flexGrow: 1,
  },
});
