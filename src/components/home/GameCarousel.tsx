import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import { View, StyleSheet } from "react-native";
import GameCarouselButtonsBar from "./GameCarouselButtonsBar";
import GameCarouselCard from "./GameCarouselCard";
import GameCarouselPressableMode from "./GameCarouselPressableMode";
import GameCarouselBulletPointsNavigation from "./GameCarouselBulletPointNavigation";
import RankingContainer from "./ranking/RankingContainer";

export default function GameCarousel({
  navigation,
}: { navigation: any }) {
  const { modes, selectedModeIndex } = useSelector(
    (state: RootState) => state.gameModeSliceReducer
  );
  // const handleChangeGame = (step: number) => {
  //   setCarouselState((prev) => ({
  //     ...prev,
  //     currentGame: (prev.currentGame + step + links.length) % links.length,
  //   }));
  // };

  return (
    <View style={styles.container}>
      <GameCarouselPressableMode />

      <GameCarouselCard
        description={modes[selectedModeIndex].description}
        time={modes[selectedModeIndex].time}
        mode={modes[selectedModeIndex].mode}
      />

      <GameCarouselButtonsBar
        navigation={navigation}
        time={modes[selectedModeIndex].time}
        mode={modes[selectedModeIndex].mode}
      />

      <GameCarouselBulletPointsNavigation />

      <RankingContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  },
});
