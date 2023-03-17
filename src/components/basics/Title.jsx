import React from "react";
import { Text } from "react-native";
import useTheme from "@hooks/useTheme";

const Title = (props) => {
  const { children, size, weight, align, margin, color } = props;
  const theme = useTheme();

  const titleStyles = {
    fontSize: theme.fontSize.title[size],
    fontFamily: "Sofia" + weight,
    textAlign: align,
    marginBottom: theme.spacing[margin],
    lineHeight: theme.fontSize.title[size] + 4,
    height: theme.fontSize.title[size],
    color: theme.colors.text,
  };

  return <Text style={titleStyles}>{children}</Text>;
};

Title.defaultProps = {
  margin: "m",
  size: "l",
  weight: "Bold",
  align: "center",
};

export default Title;
