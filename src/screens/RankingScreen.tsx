import { View, StyleSheet, Text } from "react-native";
import BackButtonNavigation from "../components/global/BackButtonNavigation";
import GameCarouselPressableMode from "../components/home/GameCarouselPressableMode";
import RankingContainer from "../components/home/ranking/RankingContainer";
import TitleScreen from "../components/global/TitleScreen";

export default function RankingScreen() {
  return (
    <View style={styles.container}>
      <BackButtonNavigation size={24} />
      <View>
        <TitleScreen size={20} title="Classement"/>
        <GameCarouselPressableMode />
        <RankingContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "column",
    gap: 10,
  },
  title: {

  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
