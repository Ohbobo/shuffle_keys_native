import { View, Text, StyleSheet, Pressable } from "react-native";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectMode } from "../../store/features/links";

export default function GameCarouselPressableMode() {
  const dispatch = useDispatch();
  const { modes, selectedModeIndex } = useSelector((state: RootState) => state.gameModeSliceReducer);

  return (
    <View style={styles.linksContainer}>
      {modes.map((mode, i) => (
        <Pressable
          key={i}
          style={[
            styles.linkPressable,
            selectedModeIndex === i ? styles.activeLink : "",
          ]}
          onPress={() => dispatch(selectMode(i))}
        >
          <Text style={styles.linkText}>{mode.description}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#F1F0EF",
    padding: 5,
  },
  linkPressable: {
    color: "#B0B4BA",
    width: "33%",
    textAlign: "center",
    padding: 10,
  },
  activeLink: {
    backgroundColor: "#E2E1DE",
    borderRadius: 10,
    color: "black",
  },
  linkText: {
    textAlign: "center",
  },
});
