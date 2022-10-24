import { useState, useEffect } from "react";
import { getPokemonById } from "../api/fetchPokemons";

const usePokemon = (id, navigation) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPokemonById(id);

      setPokemon(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { pokemon, loading, error, getPokemon };
};

export default usePokemon;
