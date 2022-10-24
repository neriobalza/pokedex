import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "./src/navigation/TabNavigation";
import PokedexNavigation from "./src/navigation/PokedexNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <PokedexNavigation />
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
