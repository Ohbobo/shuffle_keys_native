import { Mode } from "./links";

export type RootStackParamList = {
    Home: undefined;
    Game: { time: number; mode: Mode };
    Profil: undefined;
  };
  