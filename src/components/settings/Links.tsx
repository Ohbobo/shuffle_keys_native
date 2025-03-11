import { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Icon from "../icon/Icon";

export default function Links({
  children,
  name,
  linkName,
}: {
  children: React.ReactElement;
  name: string;
  linkName: string;
}) {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Pressable style={styles.pressable} onPress={toggleDialog}>
        <Icon size={20} color="black" selectedIcon={name} />
        <Text>{linkName}</Text>
      </Pressable>

      {open && <ScrollView style={styles.linkDialog}>{children}</ScrollView>}
    </>
  );
}

const styles = StyleSheet.create({
  pressable: {
    height: 60,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#AA99EC",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
  },
  linkDialog: {
    position: "absolute",
    width: "100%",
    height: 500,
    zIndex: 99,
    bottom: 0,
    left: 0,
    backgroundColor: "white",
  },
});
