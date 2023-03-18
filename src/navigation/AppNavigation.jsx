import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SignIn,
  SignUp,
  ResetPwd,
  Pokedex,
  Pokemon,
  Team,
  Account,
} from "@screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPwd" component={ResetPwd} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
