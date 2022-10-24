import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Header from "./Header";
import Spinner from "../Spinner";
import Card from "./Card";

const List = (props) => {
  const { pokemons, loadMore, loading } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => <Card pokemon={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.pokedexList}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading && <Spinner />}
      // stickyHeaderIndices={[0]}
    />
  );
};

const styles = StyleSheet.create({
  pokedexList: {
    padding: 5,
  },
});

export default List;
