import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "@database";

export const getFavorites = async () => {
  try {
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().id;
    } else {
      await setDoc(docRef, { id: [] });
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const addFavorite = async (state, id) => {
  try {
    if (state.includes(id)) return state;
    if (state.length >= 6) return state;
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "favorites", userId);

    let newState = [...state];
    newState.push(id);
    await setDoc(docRef, {
      id: newState,
    });
    return newState;
  } catch (error) {
    throw error;
  }
};

export const deleteFavorite = async (state, id) => {
  try {
    if (!state.includes(id)) return state;
    if (state.length === 0) return state;
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "favorites", userId);
    let newState = [...state];
    newState = state.filter((pokeId) => pokeId !== id);
    await setDoc(docRef, {
      id: newState,
    });
    return newState;
  } catch (error) {
    throw error;
  }
};
