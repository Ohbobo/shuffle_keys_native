import { Text, StyleSheet } from "react-native"

export default function TitleScreen({ title, size }: { title: string, size: number }) {
  const getSize = () => {
    return {
        fontSize: size,
    }
  }
  return (
    <Text style={getSize()}>{title}</Text>
  )
}