import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import NavigationBar from "./src/global_components/navigation/NavigationBar";

enableScreens();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <NavigationBar />
      </View>
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
  phoneContainer: {
    width: 375, // Largeur d'un iPhone standard
    height: 812, // Hauteur d'un iPhone standard
    borderRadius: 20, // Coins arrondis pour simuler un téléphone
    overflow: "hidden", // Empêche le débordement
    backgroundColor: "#fff",
    borderColor: "#000",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
