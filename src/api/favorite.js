import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "@utils/constants";

export const getFavorites = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
};

export const addFavorite = async (id) => {
  try {
    let favorites = await getFavorites();
    if (favorites.length >= 6) return;
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const deleteFavorite = async (id) => {
  try {
    let favorites = await getFavorites();
    favorites = favorites.filter((pokeId) => id !== pokeId);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const isFavorite = async (id) => {
  try {
    let response = await getFavorites();
    return response.includes(id);
  } catch (error) {
    throw error;
  }
};
