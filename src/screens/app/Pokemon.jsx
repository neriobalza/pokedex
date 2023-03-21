import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Screen, Header, PokemonHero, PokemonData } from "@components";
import useTheme from "@hooks/useTheme";
import { addFavorite, deleteFavorite, isFavorite } from "@api/favorite";

const Pokemon = (props) => {
  const { id, name, background, image } = props.route.params;
  const [isPokemonFav, setIsPokemonFav] = useState(false);
  const [reload, setReload] = useState(false);
  const theme = useTheme();

  const handleAddFavorite = async () => {
    await addFavorite(id);
    setReload(!reload);
  };

  const handleDeleteFavorite = async () => {
    await deleteFavorite(id);
    setReload(!reload);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavorite(id);
        setIsPokemonFav(response);
      } catch (error) {
        setIsPokemonFav(false);
      }
    })();
  }, [reload]);

  return (
    <Screen background={background} style="light-content">
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <View style={{ backgroundColor: background }}>
          <Header
            icon={isPokemonFav ? "heart" : "heart-outline"}
            onPress={isPokemonFav ? handleDeleteFavorite : handleAddFavorite}
          />
          <PokemonHero name={name} id={id} image={image} />
        </View>

        <PokemonData id={id} />
      </ScrollView>
    </Screen>
  );
};

export default Pokemon;
