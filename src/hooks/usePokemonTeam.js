import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getFavorites } from "@api/favorite";
import { API_HOST } from "@utils/constants";

const usePokemonTeam = () => {
  const [pokemons, setPokemons] = useState([]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    let results = [];
    try {
      const ids = await getFavorites();
      for await (const id of ids) {
        const response = await fetch(`${API_HOST}pokemon/${id}`);
        const pokeData = await response.json();
        results.push({
          name: pokeData.name,
          type: pokeData.types.map((type) => type.type.name),
          id: pokeData.id,
          image: pokeData.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons(results);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const updatePokemons = async () => {
    if (pokemons.length === 0) return;
    const ids = await getFavorites();
    const newPokeList = pokemons.filter((poke) => ids.includes(poke.id));
    setPokemons(newPokeList);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    updatePokemons();
  }, [check]);

  useFocusEffect(
    useCallback(() => {
      setCheck((check) => !check);
    }, [])
  );

  return {
    pokemons,
    loading,
    error,
  };
};

export default usePokemonTeam;
