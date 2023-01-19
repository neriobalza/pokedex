import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navbar from "./Navbar";
import Pokeball from "@assets/pokeball-white.png";

const Hero = (props) => {
  const { name, image, id, navigation } = props;

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />

      <View style={styles.display}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>#{`${id}`.padStart(3, 0)}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={Pokeball} style={styles.pokeball} />
        <Image source={{ uri: image }} style={styles.pokemonImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  display: {
    paddingHorizontal: 20,
    marginBottom: 75,
  },
  name: {
    fontSize: 32,
    textTransform: "uppercase",
    color: "#fff",
  },
  id: {
    fontSize: 24,
    color: "#fff",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: 210,
  },
  pokeball: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -50,
    right: -50,
    opacity: 0.3,
  },
  pokemonImg: {
    width: 210,
    height: 210,
    position: "absolute",
    bottom: -30,
    zIndex: 5,
  },
});

export default Hero;
