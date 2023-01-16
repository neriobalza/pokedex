import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Spinner } from "@components";
import Header from "./Header";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadMore, loading } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.container}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading && <Spinner />}
      stickyHeaderIndices={[0]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default PokemonList;
