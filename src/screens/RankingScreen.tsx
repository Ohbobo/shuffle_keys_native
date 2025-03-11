import { View, StyleSheet, ScrollView } from "react-native";
import GameCarouselPressableMode from "../components/home/GameCarouselPressableMode";
import RankingsSectionContainer from "../components/rankings/RankingsSectionContainer";
import TitleSection from "../components/global/TitleSection";
export default function RankingScreen() {
  return (
    <View style={styles.container}>
      <TitleSection iconSize={20} fontSize={30} title="Classement" />
      <ScrollView>
        <View>
          <GameCarouselPressableMode />
          <RankingsSectionContainer />
        </View>
      </ScrollView>
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
    backgroundColor: "#C2B5F5",
    height: "100%",
  },
  title: {},
  text: {
    fontSize: 18,
    color: "#333",
  },
});
