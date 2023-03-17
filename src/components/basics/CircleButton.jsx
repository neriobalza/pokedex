import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import useTheme from "@hooks/useTheme";

const CircleButton = (props) => {
  const { onPress, icon, color, margin } = props;
  const theme = useTheme();

  const buttonStyles = {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: theme.colors.fadedBlack,
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

CircleButton.defaultProps = {
  margin: "none",
  icon: "arrow-back",
  color: "#fefefe",
};

export default CircleButton;
