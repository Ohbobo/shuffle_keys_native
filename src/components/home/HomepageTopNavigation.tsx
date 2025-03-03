import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigationTypes";

export default function HomepageTopNavigation() {
    const navigation =
      useNavigation<StackNavigationProp<RootStackParamList, "Profil">>();

      const goToProfil = () => {
        navigation.navigate('Profil')
      }

  return (
    <View style={style.container}>
        <Pressable style={style.text} onPress={goToProfil}>
          <Text>O</Text>
        </Pressable>
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
