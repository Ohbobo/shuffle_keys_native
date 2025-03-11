import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as LucideIcons from "lucide-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function AvatarVizualiser({ navigationCard }: { navigationCard: boolean }) {
  const { isGradient, bg, gradient1, gradient2 } = useSelector(
    (state: RootState) => state.backgroundSliceReducer
  );

  const { borderWidth, borderColor, rounded } = useSelector(
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

  if (isGradient) {
    return (
      <LinearGradient
        colors={[gradient1, gradient2]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[
          styles.visualizer,
          {
            width: navigationCard ? 40 : 350,
            height: navigationCard ? 40 : 350,
            borderRadius: navigationCard ? rounded / 4 : rounded,
            borderColor: borderColor,
            borderWidth: borderWidth,
          },
        ]}
      >
        <LucideIcon
          color={color}
          size={
            navigationCard ? (iconSize / 4).toString() : iconSize.toString()
          }
        />
      </LinearGradient>
    );
  } else {
    return (
      <View
        style={[
          styles.visualizer,
          {
            backgroundColor: bg,
            width: navigationCard ? 40 : 350,
            height: navigationCard ? 40 : 350,
            borderRadius: navigationCard ? rounded / 4 : rounded,
            borderColor: borderColor,
            borderWidth: borderWidth,
          },
        ]}
      >
        <LucideIcon
          color={color}
          size={
            navigationCard ? (iconSize / 4).toString() : iconSize.toString()
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    visualizer: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
})