import React from "react";
import { ScrollView, View } from "react-native";
import usePokemon from "@hooks/usePokemon";
import { Screen, Navbar } from "@components";
import { Hero, Data } from "@components/pokemon";

const Pokemon = (props) => {
  const {} = props;
  const { id, name, background, image } = props.route.params;
  const pokemon = usePokemon(id);

  const addToFavorites = () => {};

  return (
    <Screen background={background} style="light-content">
      <View style={{ backgroundColor: background }}>
        <ScrollView>
          <Navbar
            icon="heart-outline"
            onPress={addToFavorites}
            iconColor="pink"
          />

          <Hero name={name} id={id} image={image} />

          <Data
            pokemon={pokemon.pokemon}
            loading={pokemon.loading}
            error={pokemon.error}
            reload={pokemon.getPokemon}
          />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Pokemon;
