import React from "react";
import { StyleSheet, View } from "react-native";
import { Loader } from "@components/basics";
import { Types, Details, Stats } from "@components/pokemon";
import usePokemon from "@hooks/usePokemon";
import useTheme from "@hooks/useTheme";

const PokemonData = ({ id }) => {
  const { pokemon, loading, error } = usePokemon(id);
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {loading && <Loader />}

      {!loading && (
        <View style={styles.data}>
          <Types types={pokemon.types} />
          <Details height={pokemon.height} weight={pokemon.weight} />
          <Stats stats={pokemon.stats} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    minHeight: 100,
  },
  data: {
    marginBottom: 40,
  },
});

export default PokemonData;
