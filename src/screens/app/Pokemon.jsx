import React from "react";
import { ScrollView, View } from "react-native";
import { Screen, Header, PokemonHero, PokemonData } from "@components";
import useTheme from "@hooks/useTheme";
import { addFavorite, deleteFavorite } from "@api/favorite";
import useFavorites from "@hooks/useFavorites";

const Pokemon = (props) => {
  const { id, name, background, image } = props.route.params;
  const { favorites, setFavorites } = useFavorites();
  const theme = useTheme();

  const handleAddFavorite = async () => {
    const response = await addFavorite(favorites, id);
    setFavorites(response);
  };

  const handleDeleteFavorite = async () => {
    const response = await deleteFavorite(favorites, id);
    setFavorites(response);
  };

  return (
    <Screen background={background} style="light-content">
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <View style={{ backgroundColor: background }}>
          <Header
            icon={favorites.includes(id) ? "heart" : "heart-outline"}
            onPress={
              favorites.includes(id) ? handleDeleteFavorite : handleAddFavorite
            }
          />
          <PokemonHero name={name} id={id} image={image} />
        </View>

        <PokemonData id={id} />
      </ScrollView>
    </Screen>
  );
};

export default Pokemon;
