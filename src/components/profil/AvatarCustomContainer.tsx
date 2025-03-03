import { View, Text, StyleSheet } from "react-native"
import BackgroundSection from "./BackgroundSection"
import { backgroundColors } from "../../data/avatar"
import IconSection from "./IconSection"
import { iconList } from "../../data/avatar"

export default function AvatarCustomContainer() {
  return (
    <View style={styles.container}>
        <BackgroundSection colors={backgroundColors}/>
        <IconSection iconList={iconList} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: 20
    }
})