import { View, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
import Icon from "../icon/Icon"

export default function Dropdown({ children, title }: { children: React.ReactElement, title: string }) {

    const [isOpen, setIsOpen] = useState(false);

    const toogleDropdown = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <View style={styles.container}>
            <Pressable style={[styles.pressableDropdown]} onPress={toogleDropdown}>
                <Text>{title}</Text>
                {isOpen ? <Icon size="20" color="black" selectedIcon="ChevronUp" /> : <Icon size="20" color="black" selectedIcon="ChevronDown" />}
            </Pressable>
            {isOpen && <View style={styles.dropdownContent}>{children}</View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        gap: 10,
    },
    pressableDropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: 50,
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 10
    },
    dropdownContent: {
        paddingHorizontal: 10,
        flexWrap: "wrap"
    }
})
