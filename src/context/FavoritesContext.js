import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({ favorites: [] });

export const FavoriteProvider = (props) => {
  const { children } = props;
  const [favorites, setFavorites] = useState([]);

  const valueContext = {
    favorites: favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={valueContext}>
      <>{children}</>
    </FavoritesContext.Provider>
  );
};
