import { View, Pressable, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../global/Dropdown";
import { toogleGradientColor } from "../../store/features/avatar/background";
import { RootState } from "../../store/store";
import MonoColorBackgroundCustomer from "./MonoColorBackgroundCustomer";
import GradientBackgroundCustomer from "./GradientBackgroundCustomer";


export default function BackgroundSection({ colors }: { colors: string[] }) {
  const dispatch = useDispatch();
  const { isGradient, bg, gradient1, gradient2 } = useSelector(
    (state: RootState) => state.backgroundSliceReducer
  );
  return (
    <Dropdown title="Arrière plan">
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => dispatch(toogleGradientColor())}>
          <Text style={styles.gradientButton}>
            {isGradient ? "Désactiver le dégradé" : "Activer le dégradé"}
          </Text>
        </Pressable>

        {isGradient ? (
          <GradientBackgroundCustomer colors={colors} />
        ) : (
          <MonoColorBackgroundCustomer colors={colors} />
        )}
      </View>
    </Dropdown>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 20,
  },
  bgColorContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  gradientButton: {
    color: "#2A7E3B",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
  },
});
