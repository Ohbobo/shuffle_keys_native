import { IRankingRepository } from "../domain/rankingRepository";
import { IRanking } from "../domain/rankingModel";
import { Mode } from "../../../src/types/links";

export class InMemoryRanking implements IRankingRepository {
  private rankings: IRanking[] = [
    {
      username: "Kadel",
      tag: "1515",
      score: [
        { mode: "classic", score: 900 },
        { mode: "random", score: 800 },
        { mode: "blind", score: 700 },
      ],
    },
    {
      username: "15",
      tag: "1515",
      score: [
        { mode: "classic", score: 13 },
        { mode: "random", score: 1000 },
        { mode: "blind", score: 15 },
      ],
    },
    {
      username: "kemar",
      tag: "1515",
      score: [
        { mode: "classic", score: 200 },
        { mode: "random", score: 10000 },
        { mode: "blind", score: 15 },
      ],
    },
    {
      username: "oof",
      tag: "1515",
      score: [
        { mode: "classic", score: 200 },
        { mode: "random", score: 10000 },
        { mode: "blind", score: 15 },
      ],
    },
    {
      username: "piédule",
      tag: "1515",
      score: [
        { mode: "classic", score: 200 },
        { mode: "random", score: 10000 },
        { mode: "blind", score: 15 },
      ],
    },
    {
      username: "Dabodug l'écu",
      tag: "1515",
      score: [
        { mode: "classic", score: 10000 },
        { mode: "random", score: 10000 },
        { mode: "blind", score: 10000 },
      ],
    },
  ];

  async getAllRankSorted(mode: Mode): Promise<IRanking[]> {
    return this.rankings
      .map((user) => ({
        username: user.username,
        tag: user.tag,
        score: user.score.filter((s) => s.mode === mode),
      }))
      .filter((user) => user.score.length > 0)
      .sort((a, b) => b.score[0].score - a.score[0].score);
  }

  async getBestOfFiveRank(mode: Mode): Promise<IRanking[]> {
    const allRanks =  this.getAllRankSorted(mode);
    return (await allRanks).slice(0, 3);
  }
}
