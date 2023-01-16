import React from "react";
import { StyleSheet, Image } from "react-native";
import pokeball from "@assets/pokeball-transparent.png";

const Pokeball = () => {
  return <Image source={pokeball} style={styles.pokeball} />;
};

const styles = StyleSheet.create({
  pokeball: {
    position: "absolute",
    width: 325,
    height: 325,
    right: -50,
    top: -50,
    opacity: 0.25,
  },
});

export default Pokeball;
