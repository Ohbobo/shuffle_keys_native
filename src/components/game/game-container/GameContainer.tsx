import { Mode } from "../../../types/links";
import { useGame } from "../../../hooks/useGame";
import { StyleSheet, View, Text } from "react-native";
import GameNavigationBar from "../navigation_section/GameNavigationBar";
import KeyboardContainer from "../keyboard-section/KeyboardContainer";
import GameLoader from "../game-loader/GameLoader";
import GameWriteSection from "../write_section/GameWriteSection";
import SentenceSection from "../sentence_section/SentenceSection";


export default function GameContainer({ mode, time }: { mode: Mode, time: number }) {

    const { timer, loading } = useGame(mode, time);

    if(loading) return <GameLoader />

    if(timer <= 0) return <Text>imeub</Text>

  return (
    <View style={style.container}> 
        <GameNavigationBar />
        <SentenceSection />
        <GameWriteSection />
        <KeyboardContainer />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
    }
})
