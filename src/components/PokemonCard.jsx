import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log("go to: " + pokemon.name);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.pokemonCard}>
        <View style={styles.spacing}>
          <View style={styles.background}>
            <Text>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pokemonCard: {
    flex: 1,
    height: 150,
    margin: 5,
    borderRadius: 16,
    overflow: "hidden",
  },
  spacing: {
    flex: 1,
    padding: 5,
    backgroundColor: "blue",
  },
  background: {
    flex: 1,
    backgroundColor: "grey",
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
