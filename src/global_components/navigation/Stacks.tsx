import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import GameScreen from "../../screens/GameScreen";
import { Mode } from "../../types/links";

type RootStackParamList = {
  Home: undefined;
  Game: { time: number; mode: Mode };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{
          title: "Partie",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
