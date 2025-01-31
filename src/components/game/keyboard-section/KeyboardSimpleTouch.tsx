import { StyleSheet, Pressable, Text, ViewStyle } from "react-native";

export default function KeyboardSimpleTouch({
  text,
  fn,
  style: customStyle, // Nouvelle prop facultative pour le style
}: {
  text: string;
  fn?: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.key,
        customStyle, // Appliquer le style passé en prop
        pressed && { opacity: 0.5 }, // Effet de pression
      ]}
      onPress={fn}
    >
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  key: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
    height: 35,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
