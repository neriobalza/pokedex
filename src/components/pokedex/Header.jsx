import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.conainer}>
      <Text style={styles.title}>Pokedex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Header;
