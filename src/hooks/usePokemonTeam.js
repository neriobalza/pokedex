import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import useFavorites from "./useFavorites";
import { API_HOST } from "@utils/constants";

const usePokemonTeam = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);
  const { favorites } = useFavorites();

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    let results = [];
    try {
      for await (const id of favorites) {
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
    const newPokeList = pokemons.filter((poke) => favorites.includes(poke.id));
    setPokemons(newPokeList);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    if (pokemons.length === 0) return;
    updatePokemons();
  }, [check]);

  useFocusEffect(
    useCallback(() => {
      setCheck((value) => !value);
    }, [])
  );

  return {
    pokemons,
    loading,
    error,
  };
};

export default usePokemonTeam;
