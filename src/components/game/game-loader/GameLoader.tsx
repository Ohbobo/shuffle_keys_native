import { View, Text, StyleSheet, ActivityIndicator  } from "react-native";
import { MoonLoader } from "react-spinners";

export default function GameLoader() {
  return (
    <View style={style.container}>
      <View style={style.loaderContainer}>
        <ActivityIndicator size="large" color="#12A594"/>
        <Text style={style.loaderText}>Chargement de la partie...</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    fontSize: 18
  }
});
