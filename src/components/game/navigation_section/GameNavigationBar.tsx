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
        <View style={[styles.gameNavigationChildrenContainer, styles.score]}>
            <Text>{score}</Text>
        </View>
        <View style={[styles.gameNavigationChildrenContainer, styles.timer]}>
            <Text>{timer}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gameNavigationContainer : {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        paddingHorizontal: 20,
    },
    gameNavigationChildrenContainer: {
        height: "100%",
        width:"33%",
    },
    timer: {
        justifyContent: "center",
        alignItems: 'flex-end'
    },
    score: {
        justifyContent:"center",
        alignItems: "center"
    }
})
