import { View, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeBackground } from "../../store/features/avatar/background";
import { RootState } from "../../store/store";

export default function MonoColorBackgroundCustomer({
  colors,
}: {
  colors: string[];
}) {
  const dispatch = useDispatch();
  const bg = useSelector((state: RootState) => state.backgroundSliceReducer.bg);
  return (
    <View style={styles.bgColorContainer}>
      {colors.map((color, i) => (
        <Pressable
          key={i}
          onPress={() => dispatch(handleChangeBackground(color))}
          style={[
            styles.button,
            {
              backgroundColor: color,
              borderColor: bg === color ? "black" : "",
              borderWidth: bg === color ? 1 : 0,
            },
          ]}
        ></Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bgColorContainer: {
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
