import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomepageTopNavigation() {
  return (
    <View style={style.container}>
        <Text style={style.text}>O</Text>
        <View style={style.notificationContainer}>
          <Text style={style.notificationDot}></Text>
          <Ionicons name="notifications" size={20}></Ionicons>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row", // Pour aligner le texte et l'icône horizontalement
        alignItems: "center", // Centre verticalement les éléments
        justifyContent: "space-between", // Ajoute un espacement entre les éléments
    },
    text: {
        textAlign: "center",
        backgroundColor: "black",
        borderRadius: 5,
        fontSize: 16,
        height: 24,
        width: 24,
        color: "white",
    },
    notificationContainer: {
      position: "relative",
    },
    notificationDot: {
      position: "absolute",
      right: 0,
      width: 9,
      height: 9,
      borderRadius: 50,
      backgroundColor: "#FFE770",
      zIndex: 99,
    }
})
