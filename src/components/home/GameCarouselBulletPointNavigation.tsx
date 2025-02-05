import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinksGroupProps } from "../../types/links";

export default function GameCarouselBulletPointsNavigation({
  links,
  currentGame,
  handlePressChangeGame
}: {
  links: LinksGroupProps[];
  currentGame: number;
  handlePressChangeGame: (index: number) => void
}) {
  return (
    <View style={styles.bulletsContainer}>
      {links.map((_, i) => (
        <Pressable key={i} onPress={() => handlePressChangeGame(i)}>
          <Text
            style={[
              styles.bullet,
              currentGame === i ? styles.activeBullet : "",
            ]}
          ></Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselTitleType: {
    color: "#12A594",
    fontSize: 24,
  },
  bulletsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: "#DAD9D6",
    borderRadius: 50,
  },
  activeBullet: {
    width: 20,
    backgroundColor: "#FFDC00",
  },
});
