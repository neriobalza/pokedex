import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Screen, PokedexHeader, Loader, PokemonCard } from "@components";
import usePokedex from "@hooks/usePokedex";
import useTheme from "@hooks/useTheme";

const Pokedex = (props) => {
  const { navigation } = props;
  const theme = useTheme();
  const { pokemons, loading, fetchMorePokemons } = usePokedex();

  const listStyles = {
    paddingHorizontal: theme.spacing.s,
    gap: theme.spacing.s,
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });

    return () => {
      navigation.removeListener("beforeRemove", (e) => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <Screen>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={<PokedexHeader />}
        ListFooterComponent={loading && <Loader />}
        stickyHeaderIndices={[0]}
        onEndReached={fetchMorePokemons}
        onEndReachedThreshold={0.25}
        contentContainerStyle={listStyles}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <PokemonCard pokemon={item} navigation={navigation} i={index} />
        )}
      />
    </Screen>
  );
};

export default Pokedex;
