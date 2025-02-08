import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetGameState } from "../../store/features/links";
import { stopTimer } from "../../store/features/gameMode";

interface RootStackParamList {
  Home: undefined;
  [key: string]: undefined | object;
}
export default function BackButtonNavigation({ size }: { size: number }) {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const backToHome = () => {
    dispatch(stopTimer())
    dispatch(resetGameState())
    navigation.navigate("Home");
  };

  return (
    <Pressable style={styles.pressable} onPress={backToHome}>
      <Ionicons name="chevron-back-outline" size={size}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressable: {
      width: "33%",
    }
})
