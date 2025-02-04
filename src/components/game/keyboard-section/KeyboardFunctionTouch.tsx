import { StyleSheet, Text, Pressable, ViewStyle } from "react-native";
import type { JSX } from "react";

export default function KeyboardFunctionTouch({
  onClick,
  icon,
  width,
  style: customStyle,
}: {
  onClick?: () => void;
  icon: JSX.Element | string;
  width?: number | `${number}%`;
  style?: ViewStyle | ViewStyle[];
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        style.key,
        customStyle,
        { width: width },
        pressed && { opacity: 0.5 },
      ]}
      onPress={onClick}
    >
      <Text style={style.keyText}>{icon}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  key: {
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2A2A2A",
    backgroundColor: '#191919',
  },
  keyText: {
    color: "white"
  }
});
