import { View, Text, StyleSheet } from "react-native";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import BackButtonNavigation from "../../global/BackButtonNavigation";
import { Timer } from "lucide-react-native";

export default function GameNavigationBar() {
  const { timer }  = useSelector((state: RootState) => state.modeSliceReducer);
  const score = useSelector((state: RootState) => state.scoreSliceReducer.score);

  return (
    <View style={styles.gameNavigationContainer}>
        <BackButtonNavigation size={14}/>
        <View style={[styles.score, styles.button]}>
            <Text>{score}</Text>
        </View>
        <View style={[styles.timer, styles.button]}>
            <Timer size={20}/>
            <Text>{timer}s</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gameNavigationContainer : {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        height: 50,
        paddingHorizontal: 20,
    },
    gameNavigationChildrenContainer: {
        height: 40,
        width: "auto",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#8ECEAA"
    },
    button: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#8ECEAA",
        width: "auto",
        paddingHorizontal: 5
    },
    timer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    score: {
        justifyContent:"center",
        alignItems: "center"
    }
})
