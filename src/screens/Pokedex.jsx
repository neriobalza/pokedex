import React from "react";
import { Screen } from "@components";
import { PokemonList } from "@components/pokedex";
import usePokedex from "@hooks/usePokedex";

const Pokedex = () => {
  const pokedex = usePokedex();

  return (
    <Screen>
      <PokemonList
        pokemons={pokedex.pokemons}
        loadMore={pokedex.loadMorePokemons}
        loading={pokedex.nextPage}
      />
    </Screen>
  );
};

export default Pokedex;
