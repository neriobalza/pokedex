import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getFavorites } from "@api/favorite";
import { API_HOST } from "@utils/constants";

const usePokemonTeam = () => {
  const [pokemons, setPokemons] = useState([]);
  const [newIdList, setNewIdList] = useState([]);
  const [refIdList, setRefIdList] = useState([]);
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
      console.log("terminando");
      setRefIdList(ids);
      setPokemons(results);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const updatePokemons = () => {
    console.log("update");
    const newPokeList = pokemons.filter((poke) => newIdList.includes(poke.id));
    console.log(newPokeList);

    setPokemons(newPokeList);
  };

  useEffect(() => {
    console.log("primer fetch");
    fetchPokemon();
  }, []);

  useEffect(() => {
    if (!refIdList.toString()) return;
    console.log("validating list");
    if (newIdList.toString() === refIdList.toString()) return;
    setRefIdList(newIdList);
    updatePokemons();
  }, [newIdList]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getFavorites();
        setNewIdList(response);
      })();
    }, [])
  );

  return {
    pokemons,
    loading,
    error,
  };
};

export default usePokemonTeam;
