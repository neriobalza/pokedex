import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getFavorites } from "@api/favorite";

const usePokemonTeam = () => {
  const [pokemons, setPokemons] = useState([]);
  const [idRef, setIdRef] = useState([]);
  const [idList, setIdList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getFavorites();
        setIdRef(response);
      })();
    }, [])
  );

  useEffect(() => {
    if (idList.toString() === idRef.toString()) return;
    console.log("ref", idRef);
    console.log("list", idList);
    setIdList(idRef);
  }, [idRef]);

  return {
    pokemons,
    loading,
    error,
  };
};

export default usePokemonTeam;
