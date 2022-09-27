import { API_HOST } from "../utils/constants";

const getPokemons = async (url) => {
  try {
    const apiUrl = url || `${API_HOST}pokemon?limit=20&offset=0`;
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getPokemonInfoByUrl = async (url) => {
  try {
    const responde = await fetch(url);
    const result = await responde.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export { getPokemons, getPokemonInfoByUrl };
