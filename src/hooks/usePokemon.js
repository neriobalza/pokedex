import { useState, useEffect } from "react";
import { API_HOST } from "@utils/constants";

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = API_HOST + "pokemon/";

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + id);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return { pokemon, loading, error };
};

export default usePokemon;
