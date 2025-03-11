import { View, Text, StyleSheet, Pressable } from "react-native";
import * as LucideIcons from "lucide-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AvatarVizualiser from "./AvatarVizualiser";
import ChangeAvatarView from "./ChangeAvatarView";

export default function Visualizer() {
  const [navigationCard, setNavigationCard] = useState(false);



  const setAvatarView = (bool: boolean) => {
    setNavigationCard(bool);
  };

  return (
    <>
      <View style={styles.viewModeContainer}>
        <Pressable
          style={[
            styles.pressableView,
            { backgroundColor: navigationCard ? "#C2B5F5" : "#8ECEAA" }
          ]}
          onPress={() => setAvatarView(false)}
        >
          <Text>Page de profil</Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressableView,
            { backgroundColor: !navigationCard ? "#C2B5F5" : "#8ECEAA" },
          ]}
          onPress={() => setAvatarView(true)}
        >
          <Text>Page d'accueil</Text>
        </Pressable>
      </View>
      <AvatarVizualiser navigationCard={navigationCard}/>
    </>
  );
}

const styles = StyleSheet.create({
  visualizer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  viewModeContainer: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  pressableView: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,

  },
});
