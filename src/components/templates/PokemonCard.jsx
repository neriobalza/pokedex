import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Text } from "@components/basics";
import getPokemonColor from "@utils/getPokemonColor";
import useTheme from "@hooks/useTheme";
import pokeball from "@assets/images/pokeball-white.png";
import { upperCase } from "lodash";

const PokemonCard = (props) => {
  const { pokemon, navigation, i } = props;
  const theme = useTheme();

  const containerStyles = {
    ...styles.container,
    backgroundColor: getPokemonColor(pokemon.type),
    marginRight: i % 2 === 0 ? 8 : 0,
    borderRadius: theme.spacing.m,
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", {
      id: pokemon.id,
      name: pokemon.name,
      background: getPokemonColor(pokemon.type),
      image: pokemon.image,
    });
  };

  return (
    <View style={containerStyles}>
      <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.height}>
          <Text margin="none" color="white" weight="Medium">
            {upperCase(pokemon.name)}
          </Text>
          <Text color="white">#{`${pokemon.id}`.padStart(3, 0)}</Text>
          <Image source={pokeball} style={styles.pokeball} />
          <Image source={{ uri: pokemon.image }} style={styles.pokemonImg} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    overflow: "hidden",
    elevation: 4,
  },
  height: {
    height: 140,
    padding: 16,
  },
  pokeball: {
    position: "absolute",
    bottom: -25,
    right: -25,
    width: 130,
    height: 130,
    opacity: 0.3,
  },
  pokemonImg: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
