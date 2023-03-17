import React from "react";
import { View, ActivityIndicator } from "react-native";
import useTheme from "@hooks/useTheme";

const Loader = () => {
  const theme = useTheme();

  const containerStyles = {
    padding: theme.spacing.xl,
  };

  return (
    <View style={containerStyles}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;
