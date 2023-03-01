import React, { useEffect } from "react";
import { Screen } from "@components";
import { PokemonList } from "@components/pokedex";
import usePokedex from "@hooks/usePokedex";

const Pokedex = (props) => {
  const { navigation } = props;
  const pokedex = usePokedex();

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

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
