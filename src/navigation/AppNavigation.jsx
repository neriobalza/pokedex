import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokedex, Pokemon, Team, Account } from "@screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default AppNavigation;