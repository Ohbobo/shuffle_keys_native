import { View, Text, StyleSheet } from "react-native";
import HomepageTopNavigation from "../components/home/HomepageTopNavigation";
import GameCarousel from "../components/home/GameCarousel";
import HomePageGameTypeSection from "../components/home/HomePageGameTypeSection";
import { links } from "../data/links";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <HomepageTopNavigation />
      <GameCarousel links={links} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F9F9F8"
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
