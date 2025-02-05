import { View, StyleSheet } from "react-native";
import HomepageTopNavigation from "../components/home/HomepageTopNavigation";
import GameCarousel from "../components/home/GameCarousel";
import HomePageGameTypeSection from "../components/home/HomePageGameTypeSection";
import { links } from "../data/links";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function HomeScreen({ navigation }: { navigation: any }) {

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: "static",
          bottom: 10,
          alignSelf: "center",
          width: "90%",
          borderRadius: 15,
          height: 60,
          backgroundColor: "#272A2D",
          elevation: 5,
        },
      });
    }, [navigation])
  );

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
