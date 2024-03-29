import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { upperCase } from "lodash";
import { Title, Text } from "@components/basics";
import useTheme from "@hooks/useTheme";
import Pokeball from "@assets/images/pokeball-white.png";

const PokemonHero = (props) => {
  const { name, image, id } = props;
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Title
          align="left"
          size="m"
          color="white"
          weight="SemiBold"
          margin="none"
        >
          {upperCase(name)}
        </Title>
        <Text size="l" color="white">
          #{`${id}`.padStart(3, 0)}
        </Text>
      </View>

      <View>
        <Image source={Pokeball} style={styles.pokeball} />
        <Image source={{ uri: image }} style={styles.image} />
        <View
          style={[styles.bottom, { backgroundColor: theme.colors.background }]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: "space-between",
  },

  display: {
    paddingHorizontal: 20,
  },

  pokeball: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -20,
    right: -50,
    opacity: 0.3,
  },
  image: {
    width: 210,
    height: 210,
    zIndex: 1,
    alignSelf: "center",
    bottom: -30,
  },
  bottom: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 30,
  },
});

export default PokemonHero;
