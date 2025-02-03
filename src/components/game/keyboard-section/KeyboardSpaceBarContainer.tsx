import { View, StyleSheet } from "react-native";
import KeyboardFunctionTouch from "./KeyboardFunctionTouch";
import { useDispatch } from "react-redux";
import { addSpace } from "../../../store/features/sentences";

export default function KeyboardSpaceBarContainer({ fn }: { fn: () => void }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <KeyboardFunctionTouch icon={"123"} style={styles.key} onClick={fn} />
      <KeyboardFunctionTouch icon={"space"} style={[styles.key, styles.spaceKey]} onClick={() => dispatch(addSpace())} />
      <KeyboardFunctionTouch icon={"retour"} style={styles.key} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // Le conteneur prend toute la largeur du clavier
    flexDirection: "row",
    justifyContent: "space-between", // Assure que les touches vont jusqu'aux bords
    alignItems: "center",
    gap: 10, // Même écartement que les autres touches
  },
  key: {
    flex: 1, // Chaque touche prend une part égale de l’espace
    alignSelf: "stretch", // S'étend sur toute la hauteur disponible
  },
  spaceKey: {
    flex: 2, // La touche espace prend 2x plus d’espace que les autres touches
  },
});
