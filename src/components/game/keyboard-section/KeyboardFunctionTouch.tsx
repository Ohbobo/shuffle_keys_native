import { View, StyleSheet, Text, Pressable, ViewStyle } from "react-native";
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
      <Text>{icon}</Text>
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
    backgroundColor: "#E0E0E0",
    borderColor: "#D9D9D9",
  },
});
