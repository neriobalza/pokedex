import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import getPokemonColor from "@utils/getPokemonColor";
import pokeball from "@assets/pokeball-white.png";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const navigation = useNavigation();
  const bgColor = getPokemonColor(pokemon.type);
  const bgStyles = {
    backgroundColor: bgColor,
    ...styles.background,
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", {
      id: pokemon.id,
      name: pokemon.name,
      background: bgColor,
      image: pokemon.image,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.pokemonCard}>
        <View style={styles.container}>
          <View style={bgStyles}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Image source={pokeball} style={styles.pokeball} />
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
    height: 140,
    margin: 5,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 15,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 90,
    height: 90,
  },
  pokeball: {
    position: "absolute",
    bottom: -25,
    right: -25,
    width: 130,
    height: 130,
    opacity: 0.3,
  },
  name: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  id: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
});

export default PokemonCard;
