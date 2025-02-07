import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";

import { resetState } from "../../../store/features/sentences";
import { incrementScore } from "../../../store/features/score";

import { sentences } from "../../../data/sentences";

import { generateOneRandomSentence } from "../../../utils/random/generateOneRandomSentence";

export default function SentenceSection() {
  const dispatch = useDispatch();
  const [currentSentence, setCurrentSentence] = useState(() =>
    generateOneRandomSentence(sentences)
  );

  const [letterStyles, setLetterStyles] = useState<string[]>(
    Array(sentences.length).fill("")
  );

  const data = useSelector((state: RootState) => state.sentenceReducer.value);

  const splittedData = data.split("");

  const comparaison = () => {
    const updatedStyles = currentSentence.text.split("").map((char, index) => {
      if (splittedData[index] === char) {
        return "correct";
      } else if (splittedData[index] && splittedData[index] !== char) {
        return "incorrect";
      }
      return "";
    });
    if (data === currentSentence.text) {
      setCurrentSentence((prev) => generateOneRandomSentence(sentences));
      dispatch(incrementScore(currentSentence.score));
      dispatch(resetState());
    }
    setLetterStyles(updatedStyles);
  };

  useEffect(() => {
    comparaison();
  }, [data]);

  return (
    <View style={style.container}>
      <Text style={style.avatar}></Text>
      <View style={style.sentenceText}>
        {currentSentence.text.split("").map((char, i) => (
          <Text
            key={i}
            style={[
              style.letter,
              letterStyles[i] === "correct"
                ? style.green
                : letterStyles[i] === "incorrect"
                ? style.red
                : style.white,
            ]}
          >
            {char}
          </Text>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginLeft: 20,
    marginTop: 20,
  },
  sentenceText: {
    alignSelf: "flex-start",
    flexDirection: "row",
    flexShrink: 1,
    backgroundColor: "black",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 15,
  },
  letter: {
    fontSize: 16
  },
  green: {
    color: "#65BA74",
  },
  red: {
    color: "#E5484D",
  },
  white: {
    color: "white",
  },
  avatar: {
    width: 20,
    height: 20,
    backgroundColor: "black",
    borderRadius: 50,
  },
});
