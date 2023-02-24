import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  divider: {
    height: 0.75,
    backgroundColor: "gray",
    marginBottom: 16,
  },
});

export default Divider;
