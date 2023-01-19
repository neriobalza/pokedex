import React from "react";
import { ScrollView, StatusBar, SafeAreaView, View } from "react-native";
import usePokemon from "@hooks/usePokemon";
import { Hero, Data } from "@components/pokemon";

const Pokemon = (props) => {
  const { navigation } = props;
  const { id, name, background, image } = props.route.params;
  const pokemon = usePokemon(id);

  const backgroundStyles = {
    backgroundColor: background,
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar backgroundColor={background} barStyle="light-content" />

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
    </SafeAreaView>
  );
};

export default Pokemon;
