import { View, StyleSheet, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { handleChangeGradientColors } from "../../store/features/avatar/background";

export default function GradientBackgroundCustomer({
  colors,
}: {
  colors: string[];
}) {
  const dispatch = useDispatch();
  const { gradient1, gradient2 } = useSelector(
    (state: RootState) => state.backgroundSliceReducer
  );

  return (
    <View style={styles.container}>
      <View style={styles.gradientSection}>
        <Text style={styles.gradientTitle}>Première couleur</Text>
        <View style={styles.gradientColors}>
          {colors.map((gradient, i) => (
            <Pressable
              key={i}
              style={[
                styles.button,
                {
                  borderWidth: gradient1 === gradient ? 1 : 0,
                  backgroundColor: gradient,
                },
              ]}
              onPress={() =>
                dispatch(
                  handleChangeGradientColors({ index: 1, color: gradient })
                )
              }
            ></Pressable>
          ))}
        </View>
      </View>
      <View style={styles.gradientSection}>
        <Text style={styles.gradientTitle}>Seconde couleur</Text>
        <View style={styles.gradientColors}>
          {colors.map((gradient, i) => (
            <Pressable
              key={i}
              style={[
                styles.button,
                {
                  borderWidth: gradient2 === gradient ? 1 : 0,
                  backgroundColor: gradient,
                },
              ]}
              onPress={() =>
                dispatch(
                  handleChangeGradientColors({ index: 2, color: gradient })
                )
              }
            ></Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20
  },
  gradientSection: {
    flexDirection: "column",
    gap: 10
  },
  gradientTitle: {

  },
  gradientColors: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
  },
});
