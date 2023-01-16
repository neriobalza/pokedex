import React from "react";
import { StyleSheet, View, Image } from "react-native";
import icon from "@assets/tbPokedex.png";

const PokedexIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 30,
    height: 30,
  },
});

export default PokedexIcon;
