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
          <Text style={styles.linkText}>{mode.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "auto",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 60
  },
  linkPressable: {
    color: "#B0B4BA",
    width: "33%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: "100%"
  },
  activeLink: {
    backgroundColor: "#AA99EC",
    color: "black",
  },
  linkText: {
    textAlign: "center",
  },
});
