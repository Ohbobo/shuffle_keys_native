import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "../icon/Icon";

export default function AvatarCard() {

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

  return (
    <>
    {isGradient ? (
          <LinearGradient
            colors={[gradient1, gradient2]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={[
              styles.card,
              {
                borderRadius: (rounded / 4),
                borderColor: borderColor,
                borderWidth: borderWidth
              }
            ]}
          >
            <Icon selectedIcon={selectedIcon} color={color} size={(iconSize / 4).toString()} />
          </LinearGradient>
          ) : (
          <View
            style={[
              styles.card,
              {
                backgroundColor: bg,
                borderRadius: (rounded / 4),
                borderColor: borderColor,
                borderWidth: borderWidth
              },
            ]}
          >
            <Icon selectedIcon={selectedIcon} color={color} size={(iconSize / 4).toString()} />
          </View>
          )}
    </>
  )
}

const styles = StyleSheet.create({
    card: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})