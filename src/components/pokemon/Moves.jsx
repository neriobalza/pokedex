import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Move from "./Move";

const Moves = (props) => {
  const { moves } = props;
  const [maxHeight, setMaxHeight] = useState(150);

  const displayMoves = () => {
    setMaxHeight(maxHeight === 150 ? 100000 : 150);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moves</Text>

      <View style={[styles.moves, { maxHeight: maxHeight }]}>
        {moves.map((item, i) => (
          <Move key={item.move.name} move={item.move} index={i} />
        ))}
      </View>

      <TouchableOpacity onPress={displayMoves}>
        <Icon
          style={styles.caretDown}
          name={maxHeight === 150 ? "caret-down" : "caret-up"}
          size={30}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  moves: {
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "hidden",
  },
  caretDown: {
    textAlign: "center",
  },
});

export default Moves;
