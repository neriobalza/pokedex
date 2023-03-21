import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Screen, Header, Text } from "@components";
import usePokemonTeam from "@hooks/usePokemonTeam";

const Team = (props) => {
  const { navigation } = props;
  const { pokemons, loading } = usePokemonTeam();

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

        {/* <FlatList data={pokemons} /> */}
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
