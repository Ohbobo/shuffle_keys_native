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
            <Pressable style={[styles.defaultDropdown, isOpen ? styles.activeDropdown : styles.pressableDropdown]} onPress={toogleDropdown}>
                <Text>{title}</Text>
                {isOpen ? <Icon size={20} color="black" selectedIcon="ChevronUp" /> : <Icon size={20} color="black" selectedIcon="ChevronDown" />}
            </Pressable>
            {isOpen && <View style={[styles.defaultDropdownContent, isOpen ? styles.activeDropdownContent : styles.dropdownContent]}>{children}</View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
    },
    defaultDropdown : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: 50,
        backgroundColor: "#AA99EC",
    },
    defaultDropdownContent: {
        paddingHorizontal: 10,
        flexWrap: "wrap",
        backgroundColor: "#AA99EC",
        paddingVertical: 20
    },
    pressableDropdown: {
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    dropdownContent: {
        paddingHorizontal: 10,
        flexWrap: "wrap",
        backgroundColor: "#AA99EC",
    },
    activeDropdown: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingHorizontal: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    activeDropdownContent: {
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})
