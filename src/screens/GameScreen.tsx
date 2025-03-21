import { View, StyleSheet } from "react-native";
import { Mode } from "../types/links";
import { useIsFocused, type RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";
import GameContainer from "../components/game/game-container/GameContainer";

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
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
    } else {
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
    backgroundColor: "#C2B5F5",
  },
});
