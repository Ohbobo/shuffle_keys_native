import { View, Text, StyleSheet, Pressable } from "react-native"
import BackButtonNavigation from "../../components/global/BackButtonNavigation"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import * as LucideIcons from "lucide-react-native";
import { backgroundColors } from "../../data/avatar";
import { handleChangeBackground } from "../../store/features/avatar/background";

import Visualizer from "../../components/profil/Visualizer";
handleChangeBackground
import Dropdown from "../../components/global/Dropdown";
import AvatarCustomContainer from "../../components/profil/AvatarCustomContainer";
export default function Profil() {
    const dispatch = useDispatch();
    const { isGradient, bg, gradient1, gradient2 } = useSelector((state: RootState) => state.backgroundSliceReducer);

    const { borderEffect, borderColor, rounded } = useSelector(
        (state: RootState) => state.borderSliceReducer
    );

    const shadow = useSelector(
        (state: RootState) => state.shadowSliceReducer.shadow
    );

    const { color, selectedIcon, iconSize } = useSelector(
        (state: RootState) => state.iconSliceReducer
    );

    return (
        <View style={styles.container}>
            <BackButtonNavigation size={20} />
            <Visualizer />
            <AvatarCustomContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
    },
    visualizer: {
        width: 350,
        height: 350,
        justifyContent: "center",
        alignItems: 'center'
    },
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
