import { Sentence } from "../../types/sentence";

export function generateOneRandomSentence(sentences: Sentence[]) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}