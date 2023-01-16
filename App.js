import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PokedexNavigation } from "@navigation";

const App = () => {
  return (
    <NavigationContainer>
      <PokedexNavigation />
    </NavigationContainer>
  );
};

export default App;
