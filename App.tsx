import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import NavigationBar from "./src/global_components/navigation/NavigationBar";
import ReduxProvider from "./src/components/store/ReduxProvider";
enableScreens();

//https://dribbble.com/shots/20017643-GoodNotes-Collaborative-Notes-Mobile-App

export default function App() {
  return (
    <ReduxProvider>
      <View style={styles.container}>
        <View style={styles.phoneContainer}>
            <NavigationBar />
        </View>
      </View>

    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  phoneContainer: {
    position: "relative",
    width: "100%", // Largeur d'un iPhone standard
    height: "100%", // Hauteur d'un iPhone standard
    overflow: "hidden",
    borderColor: "#000",
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

// width: 375, // Largeur d'un iPhone standard
// height: 812, // Hauteur d'un iPhone standard
// borderRadius: 20, // Coins arrondis pour simuler un téléphone
