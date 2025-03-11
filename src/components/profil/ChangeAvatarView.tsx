import { StyleSheet, Text, Pressable, View } from "react-native";

export default function ChangeAvatarView({
  navigationCard,
  setAvatarView,
}: {
  navigationCard: boolean;
  setAvatarView: (bol: boolean) => void;
}) {
  return (
    <View style={styles.viewModeContainer}>
      <Pressable
        style={[
          styles.pressableView,
          { backgroundColor: navigationCard ? "#C2B5F5" : "#8ECEAA" },
        ]}
        onPress={() => setAvatarView(false)}
      >
        <Text>Page de profil</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressableView,
          { backgroundColor: !navigationCard ? "#C2B5F5" : "#8ECEAA" },
        ]}
        onPress={() => setAvatarView(true)}
      >
        <Text>Page d'accueil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewModeContainer: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  pressableView: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
