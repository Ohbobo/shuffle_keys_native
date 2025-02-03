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

  const { keyboardState, toogleUpperCase, toogleCharacKeys } = useKeyboard({
    letterKeys,
    charsKeys,
  });

  const { isCharac, isUpperCase, keys } = keyboardState;

  const firstLine = keys.slice(0, 10);
  const secondLine = keys.slice(10, 20);
  const thirdLine = keys.slice(20, 26);

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
      <View style={style.keyboardRow}>
        <KeyboardFunctionTouch
          onClick={toogleUpperCase}
          icon={
            isUpperCase ? (
              <Ionicons name="arrow-down-outline"></Ionicons>
            ) : (
              <Ionicons name="arrow-up-outline"></Ionicons>
            )
          }
          width={"12%"}
        />
        <View style={style.thirdRow}>
          {thirdLine.map((key, i) => (
            <KeyboardSimpleTouch
              fn={() => handleAddLetter(key)}
              key={i}
              text={
                mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key
              }
              style={style.adjustedKey}
            />
          ))}
          {!isCharac && (
            <KeyboardSimpleTouch
              fn={() => handleAddLetter("'")}
              text={
                mode === "blind" ? "" : "'"
              }
              style={style.adjustedKey}
            />
          )}
        </View>
        <KeyboardFunctionTouch
          onClick={() => dispatch(deleteLastKey())}
          icon={<Ionicons name="backspace-outline"></Ionicons>}
          width={"12%"}
        />
      </View>
      <KeyboardSpaceBarContainer fn={toogleCharacKeys}/>
    </View>
  );
}

const style = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: "#F0F0F0",
    position: "absolute",
    bottom: 30,
    width: "100%",
    height: "auto",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 7,
    paddingVertical: 12,
    borderRadius: 5,
  },
  keyboardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Garder le même espacement pour les lignes 1 et 2
  },
  thirdRow: {
    flexDirection: "row",
    justifyContent: "center", // Centrer les touches restantes
    alignItems: "center",
    flexGrow: 1, // Assurer que la ligne prend toute la largeur disponible
  },
  adjustedKey: {
    flexGrow: 1, // Assurer que chaque touche prend un espace égal
    maxWidth: "10%", // Ajuster la largeur pour correspondre aux autres lignes
    minWidth: 28, // Empêcher les touches d’être trop petites
    marginHorizontal: 4, // Ajouter un espacement pour un alignement parfait
  },
});
