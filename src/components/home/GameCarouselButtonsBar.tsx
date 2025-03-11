import { View, Text, Pressable, StyleSheet } from "react-native";
import { Mode } from "../../types/links";

export default function GameCarouselButtonsBar({
  navigation,
  mode,
  time
}: {
  navigation: any;
  mode: Mode;
  time: number
}) {
  return (
    <View style={styles.carouselButtonContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, styles.flexTwoFourth]}
        onPress={() =>
          navigation.navigate("Game", { time, mode })
        }
      >
        <Text style={styles.textButton}>Jouer</Text>
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
    borderRadius: 5,
  },
  flexOneFourth: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CFCECA"
  },
  flexTwoFourth: {
    flex: 2,
    flexDirection: "row",
    gap: 5,
    borderRadius: 5,
    backgroundColor: "black",
  },
  textButton: {
    color: "white",
    fontWeight: "bold"
  }
});
