import { View, Text, StyleSheet } from "react-native"

export default function HomePageGameTypeSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.link}>
        Compétitif
      </Text>
      <Text style={styles.link}>
        Entrainement
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: 50,
        backgroundColor: "#BE93E4",
        borderRadius: 15,
        marginVertical: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    link: {
      width: "50%",
      height: "auto",
      textAlign: "center",
    }
})