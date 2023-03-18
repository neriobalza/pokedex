import React from "react";
import { ScrollView, View } from "react-native";
import usePokemon from "@hooks/usePokemon";
import { Screen, Header, PokemonHero, PokemonData } from "@components";

const Pokemon = (props) => {
  const { id, name, background, image } = props.route.params;
  const { pokemon, loading, error } = usePokemon(id);

  const addToFavorites = () => {};

  return (
    <Screen background={background} style="light-content">
      <ScrollView>
        <View style={{ backgroundColor: background }}>
          <Header icon="heart-outline" onPress={addToFavorites} />
          <PokemonHero name={name} id={id} image={image} />
        </View>

        <PokemonData />
      </ScrollView>
    </Screen>
  );
};

export default Pokemon;
