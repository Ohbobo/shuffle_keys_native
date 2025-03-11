import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,  
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useRankingsQuery } from "../../lib/services/rankingService";
import RankingRow from "../home/ranking/RankingRow";
import { useEffect } from "react";
import { setRankings } from "../../store/features/ranking";

export default function RankingsSectionContainer() {
  const dispatch = useDispatch();
  const { modes, selectedModeIndex } = useSelector(
    (state: RootState) => state.gameModeSliceReducer
  );
  const mode = modes[selectedModeIndex].mode;

  const {
    data: rankings,
    isLoading,
    error,
  } = useRankingsQuery(modes[selectedModeIndex].mode);

  const storeRankings = useSelector(
    (state: RootState) => state.rankingSliceReducer.rankings[mode]
  );

  useEffect(() => {
    if (rankings) {
      dispatch(setRankings({ mode, rankings }));
    }
  }, [rankings, dispatch, modes]);

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>15</Text>;

  return (
    <View style={styles.container}>
      {storeRankings.length > 0 ? (
        storeRankings.map((user, index) => (
          <RankingRow
            key={index}
            index={index}
            username={`${index + 1}. ${user.username}`}
            score={user.score}
            tag={user.tag}
          />
        ))
      ) : (
        <Text style={styles.noData}>Aucun classement disponible</Text>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "column",
    gap: 15,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    backgroundColor: "#AA99EC",
    marginBottom: 10
  },
  noData: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});
