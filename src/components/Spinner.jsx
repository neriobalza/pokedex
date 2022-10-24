import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size="large" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginVertical: 60,
  },
});

export default Spinner;
