import { View, StyleSheet } from "react-native";
import { Mode } from "../types/links";
import { useIsFocused, type RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";
import GameContainer from "../components/game/game-container/GameContainer";
import ReduxProvider from "../components/store/ReduxProvider";
import { useCallback, useEffect } from "react";
import { resetScore } from "../store/features/score";
import { resetState } from "../store/features/sentences";

type RootStackParamList = {
  Game: { mode: Mode; time: number };
};
type GameScreenRouteProp = RouteProp<RootStackParamList, "Game">;

export default function GameScreen({ navigation, route }: { navigation: any, route: GameScreenRouteProp }) {
  const { time, mode } = route.params;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } }); // Cache la TabBar
    } else {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "flex" } }); // Réaffiche la TabBar
    }
  }, [isFocused, navigation]);

  useFocusEffect(
    useCallback(() => {
      dispatch(resetState());
      dispatch(resetScore());
    }, [dispatch])
  );


  return (
    <View style={styles.container}>
        <GameContainer time={time} mode={mode} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
