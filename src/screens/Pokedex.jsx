import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import PokemonList from "../components/PokemonList";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const pokedex = usePokedex();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <PokemonList pokemons={pokedex.pokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
