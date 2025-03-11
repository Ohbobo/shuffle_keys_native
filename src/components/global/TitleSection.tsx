import { StyleSheet, Text, View } from "react-native";
import BackButtonNavigation from "./BackButtonNavigation";
import TitleScreen from "./TitleScreen";

export default function TitleSection({ fontSize, iconSize, title }: { fontSize: number, iconSize: number, title: string }) {
  return (
    <View style={styles.container}>
        <BackButtonNavigation size={iconSize}/>
        <TitleScreen title={title} size={fontSize}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20
  },
});
