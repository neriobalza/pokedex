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
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getPokemonById = async (id) => {
  try {
    const response = await fetch(`${API_HOST}pokemon/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export { getPokemons, getPokemonInfoByUrl, getPokemonById };
