import { View, Text, StyleSheet, Pressable } from "react-native";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectMode } from "../../store/features/links";

export default function GameCarouselBulletPointsNavigation() {

  const dispatch = useDispatch();
  const { modes, selectedModeIndex } = useSelector((state: RootState) => state.gameModeSliceReducer);

  return (
    <View style={styles.bulletsContainer}>
      {modes.map((_, i) => (
        <Pressable key={i} onPress={() => dispatch(selectMode(i))}>
          <Text
            style={[
              styles.bullet,
              selectedModeIndex === i ? styles.activeBullet : "",
            ]}
          ></Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselTitleType: {
    color: "#12A594",
    fontSize: 24,
  },
  bulletsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: "#DAD9D6",
    borderRadius: 50,
  },
  activeBullet: {
    width: 20,
    backgroundColor: "#FFDC00",
  },
});
