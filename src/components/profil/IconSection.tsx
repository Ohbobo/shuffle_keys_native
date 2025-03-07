import * as LucideIcons from "lucide-react-native";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Slider from '@react-native-community/slider';
import Dropdown from "../global/Dropdown";
import {
  handleChangeIcon,
  handleChangeIconSize,
  handleChangeTextColor,
} from "../../store/features/avatar/icon";

export default function IconSection({
  iconList,
  iconColors,
}: {
  iconList: string[];
  iconColors: string[];
}) {
  const dispatch = useDispatch();

  const { color, selectedIcon, iconSize } = useSelector(
    (state: RootState) => state.iconSliceReducer
  );
  return (
    <Dropdown title="Icon">
      <View style={styles.container}>
        <View style={styles.subDropdownContainer}>
          <Text>Icons: </Text>
          <View style={styles.iconsContainer}>
            {iconList.map((icon, i) => {
              const IconComponent =
                (LucideIcons as unknown as Record<string, React.ElementType>)[
                  icon
                ] || LucideIcons.Sun;
              return (
                <Pressable
                  key={i}
                  style={[
                    styles.iconPressable,
                    {
                      borderWidth: selectedIcon === icon ? 1 : 0,
                      borderColor: selectedIcon === icon ? "black" : "",
                    },
                  ]}
                  onPress={() => dispatch(handleChangeIcon(icon))}
                >
                  <IconComponent size={18} color="black" />
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={styles.subDropdownContainer}>
          <Text>Taille de l'icon: {iconSize}px</Text>
          <View style={styles.iconsContainer}>
              <Slider 
                style={{ width: 200, height: 40 }}
                value={iconSize}
                minimumValue={20}
                maximumValue={100}
                step={1}
                onValueChange={(value) => dispatch(handleChangeIconSize(value))}
              />
          </View>
        </View>
        <View style={styles.subDropdownContainer}>
          <Text>Couleur: </Text>
          <View style={styles.iconsContainer}>
            {iconColors.map((col, i) => (
              <Pressable
                key={i}
                style={[
                  styles.iconPressable,
                  {
                    backgroundColor: col,
                    borderWidth: color === col ? 1 : 0,
                    borderColor: color === col ? "black" : "",
                  },
                ]}
                onPress={() => dispatch(handleChangeTextColor(col))}
              ></Pressable>
            ))}
          </View>
        </View>
      </View>
    </Dropdown>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10
  },
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
