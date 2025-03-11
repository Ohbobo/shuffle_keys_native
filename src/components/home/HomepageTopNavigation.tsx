import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigationTypes";
import Icon from "../icon/Icon";
import AvatarVizualiser from "../profil/AvatarVizualiser";

export default function HomepageTopNavigation() {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Profil">>();

  const goToProfil = () => {
    navigation.navigate("Profil");
  };

  return (
    <View style={style.container}>
      <View style={style.firstContainer}>
        <Pressable onPress={goToProfil}>
          <AvatarVizualiser navigationCard={true} />
        </Pressable>
        <View style={style.notificationContainer}>
          <Icon selectedIcon="Bell" size={20} color="black" />
        </View>
      </View>
      <View style={style.secondContainer}>
        <Text style={style.navigationPseudo}>Hi 👋</Text>
        <Text style={style.navigationPseudo}>Bobo</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  secondContainer: {},
  navigationPseudo: {
    fontSize: 35,
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
    backgroundColor: "#8ECEAA",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  notificationDot: {
    position: "absolute",
    right: 0,
    width: 9,
    height: 9,
    borderRadius: 50,
    backgroundColor: "#FFE770",
    zIndex: 99,
  },
});
