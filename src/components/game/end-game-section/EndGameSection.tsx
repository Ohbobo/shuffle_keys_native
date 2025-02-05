import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface RootStackParamList  {
    Home: undefined;
    [key: string]: undefined | object
}

export default function EndGameSection() {
  const { score, completeCountScore } = useSelector(
    (state: RootState) => state.scoreSliceReducer
  );
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const goToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <View>
      <Text>Partie terminé</Text>
      <Text>Récapitulatif: </Text>
      <Text style={styles.scoreText}>Score : {score}</Text>
      <Text style={styles.scoreText}>Mots complétés : {completeCountScore}</Text>

      <Pressable style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 10,
    },
    scoreText: {
      fontSize: 16,
      marginBottom: 5,
    },
    button: {
      marginTop: 20,
      backgroundColor: "#90DA3D",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });