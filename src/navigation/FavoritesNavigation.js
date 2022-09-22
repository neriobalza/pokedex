import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
