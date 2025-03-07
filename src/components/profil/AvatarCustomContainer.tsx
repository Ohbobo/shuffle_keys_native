import { View, StyleSheet } from "react-native";

import BackgroundSection from "./BackgroundSection";
import IconSection from "./IconSection";
import BorderSection from "./BorderSection";

import { backgroundColors } from "../../data/avatar";
import { iconList, iconColors } from "../../data/avatar";
import { borderColors } from "../../data/avatar";

export default function AvatarCustomContainer() {
  return (
    <View style={styles.container}>
      <BackgroundSection colors={backgroundColors} />
      <IconSection iconList={iconList} iconColors={iconColors} />
      <BorderSection borderColors={borderColors}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
  },
});
