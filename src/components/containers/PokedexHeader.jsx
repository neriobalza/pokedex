import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import icon from "@assets/images/pokeball.png";
import useTheme from "@hooks/useTheme";

const PokedexHeader = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const goToTeam = () => {
    navigation.navigate("Team");
  };

  return (
    <View style={styles.conainer}>
      <Text style={styles.title}>Pokedex</Text>

      <TouchableWithoutFeedback onPress={goToTeam}>
        <Image source={icon} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    height: 60,
  },
  title: {
    fontSize: 48,
    color: "#161616",
    fontFamily: "SofiaBold",
  },

  image: {
    width: 40,
    height: 40,
  },
});

export default PokedexHeader;
