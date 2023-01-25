import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppNavigation } from "@navigation";
import { AuthProvider } from "@context/AuthContext";

const App = () => {
  const [fonstLoaded] = useFonts({
    Sofia: require("./assets/fonts/SofiaSans-Regular.ttf"),
    SofiaMedium: require("./assets/fonts/SofiaSans-Medium.ttf"),
    SofiaLight: require("./assets/fonts/SofiaSans-Light.ttf"),
    SofiaSemiBold: require("./assets/fonts/SofiaSans-SemiBold.ttf"),
    SofiaBold: require("./assets/fonts/SofiaSans-Bold.ttf"),
  });

  if (!fonstLoaded) return null;

  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
