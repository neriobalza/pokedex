import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

const TextButton = (props) => {
  const { children, onPress, size, weight, color } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <Text size={size} weight={weight} color={color}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default TextButton;
