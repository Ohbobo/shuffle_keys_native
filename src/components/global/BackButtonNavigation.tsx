import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
interface RootStackParamList {
  Home: undefined;
  [key: string]: undefined | object;
}
export default function BackButtonNavigation({ size }: { size: number }) {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const backToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <Pressable onPress={backToHome}>
      <Ionicons name="chevron-back-outline" size={size}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressable: {

    }
})
