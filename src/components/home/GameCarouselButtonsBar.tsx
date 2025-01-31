import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Mode } from "../../types/links";

export default function GameCarouselButtonsBar({
  handleChangeGame,
  previous,
  next,
  navigation,
  mode,
  time
}: {
  handleChangeGame: (n: number) => void;
  previous: number;
  next: number;
  navigation: any;
  mode: Mode;
  time: number
}) {
  return (
    <View style={styles.carouselButtonContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, styles.flexOneFourth]}
        onPress={() => handleChangeGame(previous)}
      >
        <Ionicons name="chevron-back" size={20}></Ionicons>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, styles.flexTwoFourth]}
        onPress={() =>
          navigation.navigate("Game", { time, mode })
        }
      >
        <Ionicons name="game-controller" size={20}></Ionicons>
        <Text>Jouer</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, styles.flexOneFourth]}
        onPress={() => handleChangeGame(next)}
      >
        <Ionicons name="chevron-forward" size={20}></Ionicons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselButtonContainer: {
    flexDirection: "row",
    width: "auto",
    height: 50,
    gap: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  flexOneFourth: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#CECECE",
  },
  flexTwoFourth: {
    flex: 2,
    flexDirection: "row",
    gap: 5,
    borderRadius: 50,
    backgroundColor: "#A1DED2",
  },
});
