import { View, Text, StyleSheet, Pressable } from "react-native";
import * as LucideIcons from "lucide-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Visualizer() {
  const [navigationCard, setNavigationCard] = useState(false);

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

  const setAvatarView = (bool: boolean) => {
    setNavigationCard(bool);
  };

  const LucideIcon =
    (LucideIcons as unknown as Record<string, React.ElementType>)[
      selectedIcon
    ] || LucideIcons.Sun;
  return (
    <>
      <View style={styles.viewModeContainer}>
        <Pressable
          style={[
            styles.pressableView,
            { backgroundColor: navigationCard ? "" : "white" }
          ]}
          onPress={() => setAvatarView(false)}
        >
          <Text>Page de profil</Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressableView,
            { backgroundColor: !navigationCard ? "" : "white" },
          ]}
          onPress={() => setAvatarView(true)}
        >
          <Text>Page d'accueil</Text>
        </Pressable>
      </View>
      {isGradient ? (
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
      ) : (
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  visualizer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  viewModeContainer: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  pressableView: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,

  },
});
