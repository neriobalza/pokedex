import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Screen, Header, Text, PokemonCard, Loader } from "@components";
import usePokemonTeam from "@hooks/usePokemonTeam";
import useTheme from "@hooks/useTheme";

const Team = (props) => {
  const { navigation } = props;
  const { pokemons, loading } = usePokemonTeam();
  const theme = useTheme();

  const listStyles = {
    paddingHorizontal: theme.spacing.s,
    gap: theme.spacing.s,
  };

  const goToAccount = () => {
    navigation.navigate("Account");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Header
          title="Team"
          icon="person-circle-outline"
          onPress={goToAccount}
        />

        <FlatList
          data={pokemons}
          numColumns={2}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={listStyles}
          ListFooterComponent={loading && <Loader />}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <PokemonCard pokemon={item} navigation={navigation} i={index} />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontFamily: "SofiaMedium",
  },
});

export default Team;
