import { View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { handleChangeBackground } from "../../store/features/avatar/background";

import Visualizer from "../../components/profil/Visualizer";
handleChangeBackground;
import BackButtonNavigation from "../../components/global/BackButtonNavigation";
import AvatarCustomContainer from "../../components/profil/AvatarCustomContainer";

export default function Profil() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backContainer}>
            <BackButtonNavigation size={20} />
        </View>
        <Visualizer />
        <AvatarCustomContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#C2B5F5",
    height: "100%"
  },
  backContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    padding: 10
  },
  visualizer: {
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
  },
});
