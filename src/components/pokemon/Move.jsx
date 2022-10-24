import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getPokemonColor from "../../utils/getPokemonColor";

const Move = (props) => {
  const { move, index } = props;
  const [moveData, setMoveData] = useState(null);
  const [borderColor, setBorderColor] = useState("#ccc");

  useEffect(() => {
    getMove();
  }, []);

  const getMove = async () => {
    try {
      const response = await fetch(move.url);
      const data = await response.json();
      setBorderColor(getPokemonColor([data.type.name]));
      setMoveData(data);
    } catch (error) {}
  };

  return (
    <View
      style={[
        styles.move,
        { borderColor: borderColor, marginRight: index % 2 === 0 ? "2%" : 0 },
      ]}
    >
      <Text style={styles.name}>{move.name.replace("-", "  ")}</Text>
      {moveData && (
        <View style={styles.data}>
          <Text style={[styles.type, { backgroundColor: borderColor }]}>
            {moveData.type.name}
          </Text>
          <Text style={styles.pp}>
            PP {moveData.pp}/{moveData.pp}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  move: {
    backgroundColor: "#efefef",
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 65,
    borderRadius: 12,
    borderWidth: 5,
    width: "49%",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  type: {
    color: "white",
    paddingHorizontal: 4,
    borderRadius: 2,
    textTransform: "uppercase",
  },
});

export default Move;
