import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import usePokedex from "../hooks/usePokedex";
import List from "../components/pokedex/List";
import PokeballBG from "../components/pokedex/PokeballBG";

const Pokedex = () => {
  const pokedex = usePokedex();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#efefef" barStyle="dark-content" />
      <PokeballBG />
      <List
        pokemons={pokedex.pokemons}
        loadMore={pokedex.loadMorePokemons}
        loading={pokedex.nextPage}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
