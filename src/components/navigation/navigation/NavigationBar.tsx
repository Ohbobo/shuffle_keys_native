import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import RankingScreen from "../../../screens/RankingScreen";
import SettingsScreen from "../../../screens/SettingsScreen";
import HomeStack from "./Stacks";
import Icon from "../../icon/Icon";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName =
              route.name === "Home"
                ? "House"
                : route.name === "Ranking"
                ? "Medal"
                : route.name === "Settings"
                ? "Settings"
                : "alert";

            return <Icon selectedIcon={iconName} size={size || 24} color={color} />;
          },
          tabBarActiveTintColor: "#8145B5",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            position: "static",
            bottom: 10,
            alignSelf: "center",
            width: "100%",
            height: 60,
            backgroundColor: "#8ECEAA",
            elevation: 5,
            borderWidth: 1,
            borderColor: "black"
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
