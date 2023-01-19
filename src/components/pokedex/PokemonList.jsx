import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spinner } from "@components";
import Header from "./Header";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadMore, loading } = props;
  const navigation = useNavigation();

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} navigation={navigation} />
      )}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 5 }}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading && <Spinner />}
      stickyHeaderIndices={[0]}
    />
  );
};

export default PokemonList;
