import { View, StyleSheet } from "react-native";
import { LinksProps } from "../../types/links";
import { useState } from "react";
import GameCarouselButtonsBar from "./GameCarouselButtonsBar";
import GameCarouselCard from "./GameCarouselCard";
import GameCarouselPressableMode from "./GameCarouselPressableMode";
import GameCarouselBulletPointsNavigation from "./GameCarouselBulletPointNavigation";

export default function GameCarousel({
  links,
  navigation,
}: LinksProps & { navigation: any }) {
  const [carouselState, setCarouselState] = useState({
    currentGame: 0,
  });

  const handleChangeGame = (step: number) => {
    setCarouselState((prev) => ({
      ...prev,
      currentGame: (prev.currentGame + step + links.length) % links.length,
    }));
  };

  const handlePressChangeGame = (index: number) => {
    if (carouselState.currentGame !== index) {
      setCarouselState((prev) => ({
        ...prev,
        currentGame: index,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <GameCarouselPressableMode 
        links={links}
        handlePressChangeGame={handlePressChangeGame}
        currentGame={carouselState.currentGame}
      />
      <GameCarouselCard
        description={links[carouselState.currentGame].description}
        time={links[carouselState.currentGame].time}
        mode={links[carouselState.currentGame].mode}
      />

      <GameCarouselButtonsBar
        handleChangeGame={handleChangeGame}
        previous={-1}
        next={1}
        navigation={navigation}
        time={links[carouselState.currentGame].time}
        mode={links[carouselState.currentGame].mode}
      />

      <GameCarouselBulletPointsNavigation 
        links={links}
        handlePressChangeGame={handlePressChangeGame}
        currentGame={carouselState.currentGame}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  }
});
