import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pokedex, Team } from "@screens";
import { PokeballIcon, PokedexIcon } from "@components";

const Stack = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen
        name="pokedex"
        component={Pokedex}
        options={{ tabBarIcon: ({ color }) => <PokedexIcon color={color} /> }}
      />
      <Stack.Screen
        name="team"
        component={Team}
        options={{ tabBarIcon: ({ color }) => <PokeballIcon color={color} /> }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigation;
