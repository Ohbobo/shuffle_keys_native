import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/HomeScreen";
import GameScreen from "../../../screens/GameScreen";
import Profil from "../../../screens/profil/Profil";
import { RootStackParamList } from "../../../types/navigationTypes";

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
      <Stack.Screen 
        name="Profil"
        component={Profil}
        options={{
          title: "Profil",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
