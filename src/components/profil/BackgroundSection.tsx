import { View, Pressable, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Dropdown from "../global/Dropdown"
import { handleChangeBackground } from "../../store/features/avatar/background";
import { RootState } from "../../store/store";
export default function BackgroundSection({ colors }: { colors: string[] }) {

    const dispatch = useDispatch();
    const { isGradient, bg, gradient1, gradient2 } = useSelector((state: RootState) => state.backgroundSliceReducer);
    return (
        <Dropdown title="Arrière plan">
            <View style={styles.buttonContainer}>

                {colors.map((color, i) => (
                    <Pressable key={i} onPress={() => dispatch(handleChangeBackground(color))} style={[styles.button, { backgroundColor: color, borderColor: bg === color ? "black" : "", borderWidth: bg === color ? 1 : 0 }]}>

                    </Pressable>
                ))}

            </View>
        </Dropdown>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,

    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 1
    }
})
