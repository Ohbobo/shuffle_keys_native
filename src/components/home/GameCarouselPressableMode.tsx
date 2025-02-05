import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinksGroupProps } from "../../types/links";

export default function GameCarouselPressableMode({
  links,
  handlePressChangeGame,
  currentGame,
}: {
  links: LinksGroupProps[];
  handlePressChangeGame: (index: number) => void;
  currentGame: number; 
}) {
  return (
    <View style={styles.linksContainer}>
      {links.map((link, i) => (
        <Pressable
          key={i}
          style={[
            styles.linkPressable,
            currentGame === i ? styles.activeLink : "",
          ]}
          onPress={() => handlePressChangeGame(i)}
        >
          <Text style={styles.linkText}>{link.description}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#F1F0EF",
    padding: 5,
  },
  linkPressable: {
    color: "#B0B4BA",
    width: "33%",
    textAlign: "center",
    padding: 10,
  },
  activeLink: {
    backgroundColor: "#E2E1DE",
    borderRadius: 10,
    color: "black",
  },
  linkText: {
    textAlign: "center",
  },
});
