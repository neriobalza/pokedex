import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

const Button = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text
        margin="none"
        size="m"
        weight="SemiBold"
        align="center"
        color="#fefefe"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#0066ff",
  },
});

export default Button;
