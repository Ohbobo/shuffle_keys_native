import { shuffleArrayToString } from "../../../utils/random/shuffleArrayToString";
import { letterKeys } from "../../../data/keys";
import { characKeys } from "../../../data/keys";
import FakeKeyboard from "./FakeKeyboard";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

export default function FakeKeyboardContainer({ mode }: { mode: string }) {

    const animatedBottom = useRef(new Animated.Value(-200)).current;

    useEffect(() => {
        animatedBottom.setValue(-200);
        Animated.timing(animatedBottom, {
            toValue: -50, // Position finale
            duration: 200, // Temps en ms (0.2s)
            easing: Easing.out(Easing.ease), // Animation fluide
            useNativeDriver: false, // Ne pas utiliser useNativeDriver car on anime un layout
          }).start();
    }, [mode]);

  const lettersKeys = mode === "random" ? shuffleArrayToString(letterKeys) : letterKeys;
  const charsKeys = mode === "random" ? shuffleArrayToString(characKeys) : characKeys;

  return (
    <Animated.View style={[styles.animatedContainer, { bottom: animatedBottom }]}>
        <FakeKeyboard mode={mode} letterKeys={lettersKeys} charsKeys={charsKeys} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: -200,
    width: "auto",
    alignItems: "center",
  },
});

