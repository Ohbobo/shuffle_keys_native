import { View, Text, StyleSheet } from "react-native";
import TitleSection from "../components/global/TitleSection";
import Links from "../components/settings/Links";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <TitleSection iconSize={20} title="Paramètres" fontSize={30}/>
      <Links name="User" linkName="Compte">
        <View>
          <Text>bobo</Text>
        </View>
      </Links>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    backgroundColor: "#C2B5F5",
    padding: 20
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
