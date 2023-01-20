import { useState, useEffect } from "react";
import { getPokemons, getPokemonInfoByUrl } from "@utils/fetchPokemons";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async (url) => {
    if (loading) return;
    try {
      setLoading(true);
      let pokemonsList = [];
      const response = await getPokemons(url);

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
      setNextPage(response.next);
      setPokemons([...pokemons, ...pokemonsList]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const loadMorePokemons = async () => {
    if (nextPage) {
      loadPokemons(nextPage);
    }
  };

  return { pokemons, nextPage, error, loadMorePokemons };
};

export default usePokedex;
