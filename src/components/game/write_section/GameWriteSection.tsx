import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function GameWriteSection() {
  const sentence = useSelector((state: RootState) => state.sentenceReducer.value);
  
  return (
    <View style={styles.container}>
        {sentence.length > 0 && (
            <View style= {styles.writeContainer}>
                <Text style={styles.avatar}></Text>
                <Text style={styles.chatBubble} >{sentence.replace(/ /g, "\u00A0")}</Text>
            </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    },
    writeContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    avatar: {
        width: 20,
        height: 20,
        backgroundColor: "#8EC8F6",
        borderRadius: 50,
    },
    chatBubble: {
        color: "white",
        marginRight: 15,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: "#8EC8F6",
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center"
    }
})