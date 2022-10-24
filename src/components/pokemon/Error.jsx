import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Error = (props) => {
  const { onPress, error } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error.message}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.label}>RELOAD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 30, alignItems: "center" },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: "#C03028",
    width: 120,
    height: 44,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  label: { fontSize: 16 },
});

export default Error;
