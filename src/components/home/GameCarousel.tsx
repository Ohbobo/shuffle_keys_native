import { View, Text, StyleSheet } from "react-native";
import { LinksProps } from "../../types/links";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import GameCarouselButtonsBar from "./GameCarouselButtonsBar";

export default function GameCarousel({ links, navigation }: LinksProps & { navigation: any }) {
  const [carouselState, setCarouselState] = useState({
    currentGame: 0,
    iconElement: <Ionicons name="glasses" size={20}></Ionicons>,
  });

  const handleChangeGame = (step: number) => {
    setCarouselState((prev) => ({
      ...prev,
      currentGame: (prev.currentGame + step + links.length) % links.length,
    }));
  };

  useEffect(() => {
    const currentMode = links[carouselState.currentGame].mode;

    const newIconElement =
      currentMode === "classic" ? (
        <Ionicons name="glasses" size={32} color={"#12A594"} />
      ) : currentMode === "blind" ? (
        <Ionicons name="eye-off" size={32} color={"#12A594"} />
      ) : (
        <Ionicons name="shuffle" size={32} color={"#12A594"} />
      );

    setCarouselState((prev) => ({
      ...prev,
      iconElement: newIconElement,
    }));
  }, [carouselState.currentGame]);

  return (
    <View style={styles.container}>
      <View style={styles.carouselCard}>
        <View>
          {carouselState.iconElement}
          <Text style={styles.carouselTitle}>Partie</Text>
          <Text style={styles.carouselTitleType}>
            {links[carouselState.currentGame].description}
          </Text>
        </View>
        <View style={styles.time}>
          <Text>{links[carouselState.currentGame].time}s</Text>
        </View>
      </View>

      <GameCarouselButtonsBar
        handleChangeGame={handleChangeGame}
        previous={-1}
        next={1}
        navigation={navigation}
        time={links[carouselState.currentGame].time}
        mode={links[carouselState.currentGame].mode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    marginTop: 50,
  },
  carouselCard: {
    height: 250,
    width: "auto",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  carouselTitle: {
    fontSize: 24,
  },
  carouselTitleType: {
    color: "#12A594",
    fontSize: 24,
  },
  time: {
    borderWidth: 2,
    borderColor: "#CECECE",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
