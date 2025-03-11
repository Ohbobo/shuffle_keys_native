import { View, Text, StyleSheet, Pressable } from "react-native";
import Dropdown from "../global/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@react-native-community/slider";
import { RootState } from "../../store/store";
import {
  handleChangeBorderColor,
  handleChangeBorderRadius,
  handleChangeBorderWidth,
} from "../../store/features/avatar/border";

export default function BorderSection({
  borderColors,
}: {
  borderColors: string[];
}) {
  const dispatch = useDispatch();
  const { rounded, borderColor, borderWidth } = useSelector(
    (state: RootState) => state.borderSliceReducer
  );

  return (
    <Dropdown title="Bordure">
      <View>
        <View style={styles.subDropdownContainer}>
          <Text>Arrondi de la bordure: </Text>
          <View style={styles.iconsContainer}>
            <Slider
              style={{ width: 200, height: 40 }}
              value={rounded}
              minimumValue={0}
              maximumValue={50}
              step={1}
              onValueChange={(value) =>
                dispatch(handleChangeBorderRadius(value))
              }
            />
          </View>
        </View>
        <View style={styles.subDropdownContainer}>
          <Text>Taille de la bordure: {borderWidth}</Text>
          <View style={styles.iconsContainer}>
            <Slider
              style={{ width: 200, height: 40 }}
              value={borderWidth}
              minimumValue={0}
              maximumValue={5}
              step={1}
              onValueChange={(value) =>
                dispatch(handleChangeBorderWidth(value))
              }
            />
          </View>
        </View>
        {borderWidth > 0 && (
          <>
            <View style={styles.subDropdownContainer}>
              <Text>Couleur de la bordure: </Text>
              <View style={styles.iconsContainer}>
                {borderColors.map((color, i) => (
                  <Pressable
                    key={i}
                    onPress={() => dispatch(handleChangeBorderColor(color))}
                    style={[
                      styles.iconPressable,
                      {
                        backgroundColor: color,
                        borderWidth: color === borderColor ? 1 : 0,
                        borderColor: color === borderColor ? "black" : "",
                      },
                    ]}
                  ></Pressable>
                ))}
              </View>
            </View>
          </>
        )}
      </View>
    </Dropdown>
  );
}

const styles = StyleSheet.create({
  subDropdownContainer: {
    flexDirection: "column",
    gap: 15,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  iconPressable: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "white",
  },
});
