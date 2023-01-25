import React from "react";
import { ScrollView, View } from "react-native";
import usePokemon from "@hooks/usePokemon";
import { Screen } from "@components";
import { Hero, Data } from "@components/pokemon";

const Pokemon = (props) => {
  const { navigation } = props;
  const { id, name, background, image } = props.route.params;
  const pokemon = usePokemon(id);

  const backgroundStyles = {
    backgroundColor: background,
  };

  return (
    <Screen background={background} style="light-content">
      <View style={backgroundStyles}>
        <ScrollView>
          <Hero name={name} id={id} image={image} navigation={navigation} />
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
