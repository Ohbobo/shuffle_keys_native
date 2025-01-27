import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Game: { description: string }
}

type GameScreenRouteProp = RouteProp<RootStackParamList, "Game">

export default function GameScreen({ route }: { route: GameScreenRouteProp }) {

  const { description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans la partie {description} !</Text>
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
