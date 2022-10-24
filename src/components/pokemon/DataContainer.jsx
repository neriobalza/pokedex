import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from "../Spinner";
import Error from "./Error";
import Types from "./Types";
import Details from "./Details";
import Stats from "./Stats";
import Moves from "./Moves";

const DataContainer = (props) => {
  const { pokemon, loading, reload, error } = props;

  if (loading)
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Error onPress={reload} error={error} />
      </View>
    );

  if (pokemon)
    return (
      <View style={styles.container}>
        <Types types={pokemon.types} />
        <Details height={pokemon.height} weight={pokemon.weight} />
        <Stats stats={pokemon.stats} />
        <Moves moves={pokemon.moves} />
      </View>
    );
};

DataContainer.defaultProps = {
  pokemon: {},
  loading: true,
  error: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default DataContainer;
