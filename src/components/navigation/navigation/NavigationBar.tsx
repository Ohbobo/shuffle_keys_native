import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import RankingScreen from "../../../screens/RankingScreen";
import SettingsScreen from "../../../screens/SettingsScreen";
import HomeStack from "./Stacks";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName: keyof typeof Ionicons.glyphMap =
              route.name === "Home"
                ? "home-sharp"
                : route.name === "Ranking"
                ? "trophy-sharp"
                : route.name === "Settings"
                ? "settings-sharp"
                : "alert";

            return <Ionicons name={iconName} size={size || 24} color={color} />;
          },
          tabBarActiveTintColor: "#FFE770",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            position: "static",
            bottom: 10,
            alignSelf: "center",
            width: "100%",
            height: 60,
            backgroundColor: "#272A2D",
            elevation: 5,
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            marginTop: 9,
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Ranking" component={RankingScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
