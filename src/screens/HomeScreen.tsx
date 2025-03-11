import { View, StyleSheet } from "react-native";
import HomepageTopNavigation from "../components/home/HomepageTopNavigation";
import GameCarousel from "../components/home/GameCarousel";
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
          width: "100%",
          height: 60,
          backgroundColor: "#8ECEAA",
          elevation: 5,
          borderWidth: 1,
          borderColor: "black",
        },
      });
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <HomepageTopNavigation />
      <GameCarousel navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#C2B5F5",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
