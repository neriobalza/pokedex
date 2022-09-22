import React from "react";
import { StyleSheet, Image } from "react-native";
import pokeballImage from "../assets/pokeball.png";

const PokeballIcon = () => {
  return <Image source={pokeballImage} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: { width: 30, height: 30, bottom: -3 },
});

export default PokeballIcon;
