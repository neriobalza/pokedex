import { useState, useEffect } from "react";
import { API_HOST } from "@utils/constants";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = API_HOST + "pokemon?offset=0&limit=20";

  useEffect(() => {
    fetchPokemons(baseUrl);
  }, []);

  const fetchPokemons = async (url) => {
    if (loading) return;
    setLoading(true);
    let newPokemons = [];

    try {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      for await (const poke of results) {
        const pokeResponse = await fetch(poke.url);
        const pokeData = await pokeResponse.json();
        newPokemons.push({
          name: pokeData.name,
          type: pokeData.types.map((type) => type.type.name),
          id: pokeData.id,
          image: pokeData.sprites.other["official-artwork"].front_default,
        });
      }
      setNextPage(data.next);
      setPokemons([...pokemons, ...newPokemons]);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const fetchMorePokemons = async () => {
    if (nextPage) fetchPokemons(nextPage);
  };

  return { pokemons, loading, error, fetchMorePokemons };
};

export default usePokedex;
