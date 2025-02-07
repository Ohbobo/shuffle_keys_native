import { View, Text, StyleSheet } from "react-native";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import BackButtonNavigation from "../../global/BackButtonNavigation";

export default function GameNavigationBar() {
  const { timer }  = useSelector((state: RootState) => state.modeSliceReducer);
  const score = useSelector((state: RootState) => state.scoreSliceReducer.score);

  return (
    <View style={styles.gameNavigationContainer}>
        <BackButtonNavigation size={14}/>
        <View>
            <Text>{score}</Text>
        </View>
        <View>
            <Text>{timer}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gameNavigationContainer : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60,
        paddingHorizontal: 20,
    }
})
