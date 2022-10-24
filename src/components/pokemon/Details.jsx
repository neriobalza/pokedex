import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Details = (props) => {
  const { height, weight } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>

      <View style={styles.data}>
        <Icon name="ios-paw-outline" size={30} style={styles.icon} />
        <Text style={styles.text}>{(height * 0.1).toFixed(1)} m</Text>
      </View>

      <View style={styles.data}>
        <Icon name="ios-barbell-outline" size={30} style={styles.icon} />
        <Text style={styles.text}>{(weight * 0.1).toFixed(1)} Kg</Text>
      </View>
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
  data: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginRight: 8 },
  text: {
    fontSize: 16,
  },
});

export default Details;
