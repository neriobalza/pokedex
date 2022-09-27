import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.pokemonList}
    />
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  pokemonList: {
    // padding: 5,
  },
});
