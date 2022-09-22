import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexNavigation from "./PokedexNavigation";
import FavoritesNavigation from "./FavoritesNavigation";
import PokeballIcon from "../components/PokeballIcon";

const Stack = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="PokedexNavigation">
      <Stack.Screen
        name="PokedexNavigation"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "Pokedex",
          headerShown: false,
          tabBarIcon: () => <PokeballIcon />,
        }}
      />
      <Stack.Screen
        name="FavoritesNavigation"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigation;
