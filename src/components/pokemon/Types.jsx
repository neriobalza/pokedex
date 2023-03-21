import React from "react";
import { StyleSheet, Text, View } from "react-native";
import getPokemonColor from "@utils/getPokemonColor";
import useTheme from "@hooks/useTheme";

const Types = (props) => {
  const { types = [] } = props;
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {types.map((elm) => {
        const type = elm.type.name;
        const typeBackground = getPokemonColor([type]);
        return (
          <View
            style={[
              styles.type,
              {
                backgroundColor: typeBackground,
              },
            ]}
            key={type}
          >
            <Text style={[styles.text, { color: theme.colors.white }]}>
              {type}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  type: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    width: 60,
    textTransform: "capitalize",
    fontFamily: "SofiaBold",
  },
});

export default Types;
