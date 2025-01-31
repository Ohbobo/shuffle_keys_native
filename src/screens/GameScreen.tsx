import { View, StyleSheet } from "react-native";
import { Mode } from "../types/links";
import { useIsFocused, type RouteProp } from "@react-navigation/native";

import GameContainer from "../components/game/game-container/GameContainer";
import ReduxProvider from "../components/store/ReduxProvider";
import { useEffect } from "react";

type RootStackParamList = {
  Game: { mode: Mode; time: number };
};
type GameScreenRouteProp = RouteProp<RootStackParamList, "Game">;

export default function GameScreen({ navigation, route }: { navigation: any, route: GameScreenRouteProp }) {
  const { time, mode } = route.params;
  const isFocused = useIsFocused(); // Vérifie si l'écran est actif

  useEffect(() => {
    if (isFocused) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } }); // Cache la TabBar
    } else {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "flex" } }); // Réaffiche la TabBar
    }
  }, [isFocused, navigation]);
  return (
    <View style={styles.container}>
      <ReduxProvider>
        <GameContainer time={time} mode={mode} />
      </ReduxProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
