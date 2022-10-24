import React from "react";
import { StyleSheet, Text, View } from "react-native";
import getPokemonColor from "../../utils/getPokemonColor";

const Types = (props) => {
  const { types = [] } = props;

  return (
    <View style={styles.container}>
      {types.map((elm) => {
        const type = elm.type.name;
        const typeBackground = getPokemonColor([type]);
        return (
          <View
            style={{
              backgroundColor: typeBackground,
              paddingHorizontal: 20,
              paddingVertical: 4,
              borderRadius: 20,
              marginHorizontal: 4,
            }}
            key={type}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
                width: 60,
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
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
  },
});

export default Types;
