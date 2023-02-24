import React from "react";
import { Text } from "react-native";
import { useTheme } from "@hooks";

const Title = (props) => {
  const { children, size, weight, align } = props;
  const { theme } = useTheme();

  const titleStyles = {
    fontSize: theme.titleSizes[size],
    fontFamily: "Sofia" + weight,
    textAlign: align,
    marginBottom: theme.spacing.m,
  };

  return (
    <>
      <Text style={titleStyles}>{children}</Text>
    </>
  );
};

Title.defaultProps = {
  size: "l",
  weight: "Bold",
  align: "center",
};

export default Title;
