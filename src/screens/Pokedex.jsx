import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Pokeball, PokemonList } from "@components/pokedex";
import usePokedex from "@hooks/usePokedex";

const Pokedex = () => {
  const pokedex = usePokedex();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#efefef" barStyle="dark-content" />

      <Pokeball />

      <PokemonList
        pokemons={pokedex.pokemons}
        loadMore={pokedex.loadMorePokemons}
        loading={pokedex.nextPage}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
