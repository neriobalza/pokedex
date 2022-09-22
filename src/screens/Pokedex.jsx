import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const Pokedex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export default Pokedex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
