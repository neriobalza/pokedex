import { useState, useEffect } from "react";
import { getPokemons, getPokemonInfoByUrl } from "../api/fetchPokemons";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      let pokemonsList = [];
      const response = await getPokemons();

      for await (const poke of response.results) {
        const pokemonDetails = await getPokemonInfoByUrl(poke.url);

        pokemonsList.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types.map((type) => type.type.name),
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsList]);
    } catch (error) {
      setError(error);
    }
  };

  const loadMorePokemons = async () => {};

  return { pokemons, loading, error, loadMorePokemons };
};

export default usePokedex;
