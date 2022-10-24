import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navbar from "./Navbar";
import Pokeball from "../../assets/pokeball-white.png";

const Header = (props) => {
  const { name, image, id, navigation } = props;

  return (
    <View>
      <Navbar navigation={navigation} />

      <View style={styles.pokemonDisplay}>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.pokemonId}>#{`${id}`.padStart(3, 0)}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={Pokeball} style={styles.pokeballImage} />
        <Image source={{ uri: image }} style={styles.pokemonImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonDisplay: {
    paddingHorizontal: 20,
    marginBottom: 75,
  },
  pokemonName: {
    fontSize: 32,
    textTransform: "uppercase",
    color: "#fff",
  },
  pokemonId: {
    fontSize: 24,
    color: "#fff",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: 210,
  },
  pokeballImage: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -50,
    right: -50,
    opacity: 0.3,
  },
  pokemonImage: {
    width: 210,
    height: 210,
    position: "absolute",
    bottom: -30,
    zIndex: 5,
  },
});

export default Header;
