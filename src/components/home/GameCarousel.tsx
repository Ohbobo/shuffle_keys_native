import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinksProps } from "../../types/links";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import GameCarouselButtonsBar from "./GameCarouselButtonsBar";
import FakeKeyboardContainer from "./fakeKeyboard/FakeKeyboardContainer";

export default function GameCarousel({
  links,
  navigation,
}: LinksProps & { navigation: any }) {
  const [carouselState, setCarouselState] = useState({
    currentGame: 0,
    iconElement: <Ionicons name="glasses" size={20}></Ionicons>,
  });

  const handleChangeGame = (step: number) => {
    setCarouselState((prev) => ({
      ...prev,
      currentGame: (prev.currentGame + step + links.length) % links.length,
    }));
  };

  const handlePressChangeGame = (index: number) => {
    setCarouselState((prev) => ({
      ...prev,
      currentGame: index,
    }));
  };

  // useEffect(() => {
  //   const currentMode = links[carouselState.currentGame].mode;

  //   const newIconElement =
  //     currentMode === "classic" ? (
  //       <Ionicons name="glasses" size={32} color={"#12A594"} />
  //     ) : currentMode === "blind" ? (
  //       <Ionicons name="eye-off" size={32} color={"#12A594"} />
  //     ) : (
  //       <Ionicons name="shuffle" size={32} color={"#12A594"} />
  //     );

  //   setCarouselState((prev) => ({
  //     ...prev,
  //     iconElement: newIconElement,
  //   }));
  // }, [carouselState.currentGame]);

  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        {links.map((link, i) => (
          <Pressable
            key={i}
            style={[
              styles.linkPressable,
              carouselState.currentGame === i ? styles.activeLink : "",
            ]}
            onPress={() => handlePressChangeGame(i)}
          >
            <Text style={styles.linkText}>{link.description}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.carouselCard}>
        <View>
          <Text style={styles.carouselTitle}>
            Partie {links[carouselState.currentGame].description}
          </Text>
        </View>
        <View style={styles.time}>
          <Text>{links[carouselState.currentGame].time}s</Text>
        </View>
        <FakeKeyboardContainer mode={links[carouselState.currentGame].mode}/>
      </View>

      <GameCarouselButtonsBar
        handleChangeGame={handleChangeGame}
        previous={-1}
        next={1}
        navigation={navigation}
        time={links[carouselState.currentGame].time}
        mode={links[carouselState.currentGame].mode}
      />

      <View style={styles.bulletsContainer}>
        {links.map((_, i) => (
          <Pressable key={i} onPress={() => handlePressChangeGame(i)}>
            <Text
              style={[
                styles.bullet,
                carouselState.currentGame === i ? styles.activeBullet : "",
              ]}
            ></Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  },
  carouselCard: {
    position: "relative",
    height: 250,
    width: "auto",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#E9E8E6",
    overflow: "hidden"
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  carouselTitleType: {
    color: "#12A594",
    fontSize: 24,
  },   
  time: {
    borderWidth: 2,
    borderColor: "#CECECE",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  linksContainer: {
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
