import React from "react";
import { TouchableOpacity } from "react-native";
import useTheme from "@hooks/useTheme";
import Text from "./Text";

const Button = (props) => {
  const { title, onPress, color } = props;
  const theme = useTheme();

  const buttonStyles = {
    height: 50,
    justifyContent: "center",
    marginBottom: theme.spacing.m,
    borderRadius: theme.spacing.s,
    backgroundColor: color ? theme.colors[color] : theme.colors.btnBg,
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text
        margin="none"
        size="m"
        weight="SemiBold"
        align="center"
        color="white"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
