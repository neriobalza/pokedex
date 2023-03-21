import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@components/basics";
import Icon from "react-native-vector-icons/Ionicons";

const Details = (props) => {
  const { height, weight } = props;

  return (
    <View style={styles.container}>
      <Text size="m" weight="SemiBold" margin="none">
        Details
      </Text>

      <View style={styles.data}>
        <Icon name="ios-paw-outline" size={30} />

        <Text margin="none">{(height * 0.1).toFixed(1)} m</Text>
      </View>

      <View style={styles.data}>
        <Icon name="ios-barbell-outline" size={30} />

        <Text margin="none">{(weight * 0.1).toFixed(1)} Kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 8,
  },
  data: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default Details;
