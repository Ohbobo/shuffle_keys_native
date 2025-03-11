import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinksGroupProps } from "../../types/links";
import FakeKeyboardContainer from "./fakeKeyboard/FakeKeyboardContainer";
export default function GameCarouselCard({
  description,
  time,
  mode,
  title
}: LinksGroupProps) {
  return (
    <View style={styles.carouselCard}>
      <View style={styles.carouselCardContentContainer}>
        <View>
          <Text style={styles.carouselTitle}>Partie </Text>
          <Text style={[styles.carouselTitleDescription, styles.carouselTitle]}>{title}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>

      <FakeKeyboardContainer mode={mode} />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselCard: {
    position: "relative",
    height: 350,
    width: "auto",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    backgroundColor: "#AA99EC"
  },
  carouselCardContentContainer: {
    flexDirection: "column",
    width: "100%",
    height: "50%",
    alignItems: "flex-start",
    gap: 20
  },
  carouselTitle: {
    fontSize: 24,
  },
  carouselTitleDescription : {
    fontWeight: "bold"
  },
  description: {
    width: "60%",
    color: "#2F265F"
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
