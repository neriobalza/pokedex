import React from "react";
import { StyleSheet, View } from "react-native";
import useTheme from "@hooks/useTheme";

const Divider = () => {
  const theme = useTheme();

  const dividerStyles = {
    height: 0.75,
    backgroundColor: theme.colors.gray,
    marginBottom: theme.spacing.m,
  };

  return (
    <View style={styles.container}>
      <View style={dividerStyles}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});

export default Divider;
