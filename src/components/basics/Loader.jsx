import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loader = (props) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,.75)",
  },
});

export default Loader;
