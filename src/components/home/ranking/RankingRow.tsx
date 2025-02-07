import { View, Text, StyleSheet } from "react-native";
import { IRanking } from "../../../../backModules/rankings/domain/rankingModel";
export default function RankingRow({ index, username, tag, score }: IRanking & { index: number }) {

  const generateColors = () => {
    if(index === 0) {
      return {
        backgroundColor: "#FBE577"
      }
    }
    if(index === 1) {
      return {
        backgroundColor: "#E0E0E0"
      }
    }
    if(index === 2) {
      return {
        backgroundColor: "#E7D9D3"
      }
    }
  }

  return (
    <View style={[styles.rankItem, generateColors()]}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          {username} 
        </Text>
        <Text style={styles.tag}>
          #{tag}
        </Text>
      </View>
      <Text style={styles.score}>{score[0].score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rankItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 8,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  usernameContainer: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center"
  },
  username: {
    fontSize: 14,
  },
  tag: {
    fontSize: 11
  },
  score: {
    fontSize: 14,
    color: "#555",
    fontWeight: "600"
  },
});
