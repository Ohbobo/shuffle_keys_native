import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinksGroupProps } from "../../types/links";
import FakeKeyboardContainer from "./fakeKeyboard/FakeKeyboardContainer";

export default function GameCarouselCard({
  description,
  time,
  mode,
}: LinksGroupProps) {
  return (
    <View style={styles.carouselCard}>
      <View style={styles.carouselCardContentContainer}>
        <View>
          <Text style={styles.carouselTitle}>Partie {description}</Text>
        </View>
        <View style={styles.time}>
          <Text>{time}s</Text>
        </View>
      </View>

      <FakeKeyboardContainer mode={mode} />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselCard: {
    position: "relative",
    height: 250,
    width: "auto",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#E9E8E6",
    overflow: "hidden",
  },
  carouselCardContentContainer: {
    flexDirection: "row",
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  time: {
    borderWidth: 2,
    borderColor: "#CECECE",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
