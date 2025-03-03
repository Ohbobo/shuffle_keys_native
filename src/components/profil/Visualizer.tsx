import { View, Text, StyleSheet } from "react-native"
import * as LucideIcons from "lucide-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


export default function Visualizer() {
  const { isGradient, bg, gradient1, gradient2 } = useSelector((state: RootState) => state.backgroundSliceReducer);

  const { borderEffect, borderColor, rounded } = useSelector(
    (state: RootState) => state.borderSliceReducer
  );

  const shadow = useSelector(
    (state: RootState) => state.shadowSliceReducer.shadow
  );

  const { color, selectedIcon, iconSize } = useSelector(
    (state: RootState) => state.iconSliceReducer
  );
  const LucideIcon =
    (LucideIcons as unknown as Record<string, React.ElementType>)[
    selectedIcon
    ] || LucideIcons.Sun;
  return (
    <View style={[styles.visualizer, { backgroundColor: bg }]}>

      <LucideIcon color={color} size={iconSize.toString()} />
    </View>
  )
}

const styles = StyleSheet.create({
  visualizer: {
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: 'center'
  },
})
