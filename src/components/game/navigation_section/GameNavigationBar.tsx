import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";


export default function GameNavigationBar() {
  const { timer }  = useSelector((state: RootState) => state.modeSliceReducer);
  const score = useSelector((state: RootState) => state.scoreSliceReducer.score);

  return (
    <View style={styles.gameNavigationContainer}>
        <View>
            <Ionicons name="close-outline" size={24}></Ionicons>
        </View>
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
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})
