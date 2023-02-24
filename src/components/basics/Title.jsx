import React from "react";
import { Text } from "react-native";
import { useTheme } from "@hooks";

const Title = (props) => {
  const { children, size, weight, align, margin } = props;
  const { theme } = useTheme();

  const titleStyles = {
    fontSize: theme.titleSizes[size],
    fontFamily: "Sofia" + weight,
    textAlign: align,
    marginBottom: theme.spacing[margin],
    lineHeight: theme.titleSizes[size] + 4,
    height: theme.titleSizes[size],
  };

  return (
    <>
      <Text style={titleStyles}>{children}</Text>
    </>
  );
};

Title.defaultProps = {
  margin: "m",
  size: "l",
  weight: "Bold",
  align: "center",
};

export default Title;
