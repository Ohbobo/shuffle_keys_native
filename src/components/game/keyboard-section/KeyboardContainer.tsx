import { useSelector } from "react-redux";
import { letterKeys } from "../../../data/keys";
import { characKeys } from "../../../data/keys";
import { RootState } from "../../../store/store";
import { shuffleArrayToString } from "../../../utils/random/shuffleArrayToString";
import { useEffect, useMemo, useRef } from "react";
import Keyboard from "./Keyboard";
import { Animated, Easing, StyleSheet } from "react-native";

export default function KeyboardContainer() {
  const animatedBottom = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    animatedBottom.setValue(-200);
    Animated.timing(animatedBottom, {
      toValue: 10,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, []);

  const mode = useSelector((state: RootState) => state.modeSliceReducer.value);
  const randomKeys = (keys: string) => {
    return useMemo(() => shuffleArrayToString(keys), []);
  };
  const lettersKeys = mode === "random" ? randomKeys(letterKeys) : letterKeys;
  const charsKeys = mode === "random" ? randomKeys(characKeys) : characKeys;

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
