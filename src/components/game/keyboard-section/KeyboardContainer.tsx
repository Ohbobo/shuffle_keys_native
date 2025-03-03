import { useSelector } from "react-redux";
import { letterKeys } from "../../../data/keys";
import { characKeys } from "../../../data/keys";
import { RootState } from "../../../store/store";
import { shuffleArrayToString } from "../../../utils/random/shuffleArrayToString";
import { useEffect, useState, useRef } from "react";
import Keyboard from "./Keyboard";
import { Animated, Easing, StyleSheet } from "react-native";

export default function KeyboardContainer() {
  const animatedBottom = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    animatedBottom.setValue(-200);
    const animation = Animated.timing(animatedBottom, {
      toValue: 10,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    });

    animation.start();

    return() => {
      animation.stop();
    }
  }, [animatedBottom]);

  const mode = useSelector((state: RootState) => state.modeSliceReducer.value) || "classic";

  const [lettersKeys, setLettersKeys] = useState<string>(letterKeys)
  const [charsKeys, setCharsKeys] = useState<string>(letterKeys)

  useEffect(() => {
    if(mode === "random") {
      setLettersKeys(shuffleArrayToString(letterKeys));
      setCharsKeys(shuffleArrayToString(characKeys));
    } else {
      setLettersKeys(letterKeys);
      setCharsKeys(characKeys)
    }
  }, [mode]);

  return (
    <Animated.View
      style={[styles.animatedContainer, { bottom: animatedBottom }]}
    >
      <Keyboard letterKeys={lettersKeys} charsKeys={charsKeys} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  animatedContainer: {
    position: "absolute",
    width: "100%",
  },
});
