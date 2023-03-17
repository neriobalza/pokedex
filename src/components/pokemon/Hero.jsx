import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text } from "@components";
import Pokeball from "@assets/images/pokeball-white.png";
import { upperCase } from "lodash";

const Hero = (props) => {
  const { name, image, id } = props;

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Title align="left" size="m" color="#fff" weight="SemiBold">
          {upperCase(name)}
        </Title>
        <Text size="l" color="#fff">
          #{`${id}`.padStart(3, 0)}
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={Pokeball} style={styles.pokeball} />
        <Image source={{ uri: image }} style={styles.pokemonImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  display: {
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: 210,
  },
  pokeball: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -50,
    right: -50,
    opacity: 0.3,
  },
  pokemonImg: {
    width: 210,
    height: 210,
    zIndex: 5,
    position: "absolute",
    bottom: -30,
  },
});

export default Hero;
