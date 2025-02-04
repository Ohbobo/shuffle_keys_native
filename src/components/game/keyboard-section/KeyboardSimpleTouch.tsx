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
        customStyle, 
        pressed && { opacity: 0.5 },
      ]}
      onPress={fn}
    >
      <Text style={styles.keyText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  key: {
    borderWidth: 1,
    borderColor: "#2A2A2A",
    backgroundColor: '#222222',
    borderRadius: 5,
    height: 35,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: "white",
    fontSize: 16
  }
});
