import { View, StyleSheet, Text, Pressable } from "react-native";
import Dropdown from "../global/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import * as LucideIcons from "lucide-react-native";
import { handleChangeIcon, handleChangeIconSize, handleChangeTextColor } from "../../store/features/avatar/icon";
export default function IconSection({ iconList }: { iconList: string[] }) {
    const dispatch = useDispatch()

    const { color, selectedIcon, iconSize } = useSelector((state: RootState) => state.iconSliceReducer);
    return (
        <Dropdown title="Icon">
            <View>
                <View style={styles.subDropdownContainer}>
                    <Text>Icons</Text>
                    <View style={styles.iconsContainer}>
                        {iconList.map((icon, i) => {
                            const IconComponent =
                                (LucideIcons as unknown as Record<string, React.ElementType>)[
                                icon
                                ] || LucideIcons.Sun;
                            return (
                                <Pressable key={i} style={[styles.iconPressable, {
                                    borderWidth: selectedIcon === icon ? 1: 0, borderColor: selectedIcon === icon ? "black": ""
                                }]} onPress={() => dispatch(handleChangeIcon(icon))}>
                                    <IconComponent size={18} color="black"/>
                                </Pressable>
                            )
                        })}
                    </View>
                </View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </Dropdown>
    )
}

const styles = StyleSheet.create({
    subDropdownContainer: {
        flexDirection: "column",
        gap: 15
    },
    iconsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10
    },
    iconPressable: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: "white"
    }
})