import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import { View, StyleSheet, ScrollView, Text } from "react-native";
import GameCarouselButtonsBar from "./GameCarouselButtonsBar";
import GameCarouselCard from "./GameCarouselCard";
import GameCarouselPressableMode from "./GameCarouselPressableMode";
import RankingContainer from "./ranking/RankingContainer";

export default function GameCarousel({ navigation }: { navigation: any }) {
  const { modes, selectedModeIndex } = useSelector(
    (state: RootState) => state.gameModeSliceReducer
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <GameCarouselPressableMode />

          <GameCarouselCard
            title={modes[selectedModeIndex].title}
            description={modes[selectedModeIndex].description}
            time={modes[selectedModeIndex].time}
            mode={modes[selectedModeIndex].mode}
          />
        </View>

        <GameCarouselButtonsBar
          navigation={navigation}
          time={modes[selectedModeIndex].time}
          mode={modes[selectedModeIndex].mode}
        />
        <View style={styles.rankingContainer}>
          <Text style={styles.rankingContainerTitle}>Top joueurs</Text>
          <RankingContainer />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    marginBottom: 20,
    marginTop: 10
  },
  rankingContainer: {
    flexDirection: "column",
    gap: 20
  },
  rankingContainerTitle: {
    fontSize: 20,
    fontWeight: "500"
  }
});
