import { View, StyleSheet } from "react-native";
import { useKeyboard } from "../../../hooks/useKeyboard";
import { Ionicons } from "@expo/vector-icons";
import KeyboardSimpleTouch from "../../game/keyboard-section/KeyboardSimpleTouch";
import KeyboardFunctionTouch from "../../game/keyboard-section/KeyboardFunctionTouch";
import KeyboardSpaceBarContainer from "../../game/keyboard-section/KeyboardSpaceBarContainer";

export default function FakeKeyboard({ letterKeys, charsKeys, mode }: { letterKeys: string, charsKeys: string, mode: string }) {
  const { keyboardState, toogleUpperCase, toogleCharacKeys, firstLine, secondLine, thirdLine } = useKeyboard({
    letterKeys,
    charsKeys,
  });

  const { isCharac, isUpperCase } = keyboardState;
 
  return (
    <View style={[style.keyboardContainer]}>
      {/* Première ligne */}
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

      {/* Troisième ligne avec touches de fonction */}
      <View style={style.thirdRow}>
        {/* Touche Shift (Maj) - Alignée à gauche */}
        <KeyboardFunctionTouch
          onClick={toogleUpperCase}
          icon={isUpperCase ? <Ionicons name="arrow-down-outline" size={14} /> : <Ionicons name="arrow-up-outline" size={14} />}
          style={style.functionKey}
        />

        {/* Lettres de la troisième ligne (centrées et espacées) */}
        <View style={style.lettersContainer}>
          {thirdLine.map((key, i) => (
            <KeyboardSimpleTouch
              key={i}
              text={mode === "blind" ? "" : isUpperCase ? key.toUpperCase() : key}
            />
          ))}
          {!isCharac && (
            <KeyboardSimpleTouch text={mode === "blind" ? "" : "'"} />
          )}
        </View>

        {/* Touche Retour (Backspace) - Alignée à droite */}
        <KeyboardFunctionTouch
          icon={<Ionicons name="backspace-outline" size={14} />}
          style={style.functionKey}
        />
      </View>

      {/* Barre d’espace */}
      <KeyboardSpaceBarContainer fn={toogleCharacKeys} />
    </View>
  );
}

const style = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: "black",
    flexDirection: "column",
    width: "95%", // Occupe 95% de la largeur du parent, pour laisser un peu de marge
    maxWidth: 400, // Limite la taille maximale pour éviter les débordements
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
