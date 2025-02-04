import { Sentence } from "../../../src/types/sentence";

export interface ISentenceRepository {
    getSentences(): Promise<Sentence[]>;
}