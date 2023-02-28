import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@hooks";

const IconButton = (props) => {
  const { onPress, icon, color, margin } = props;
  const { theme } = useTheme();

  const buttonStyles = {
    ...styles.button,
    marginRight: theme.spacing[margin],
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      activeOpacity={0.75}
    >
      <Icon name={icon} size={35} color={color} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  margin: "none",
  icon: "arrow-back",
  color: "#fefefe",
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0, 0.15)",
  },
});

export default IconButton;
