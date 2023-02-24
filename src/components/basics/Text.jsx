import React from "react";
import { Text as TextRn } from "react-native";
import { useTheme } from "@hooks";

const Text = (props) => {
  const { children, size, weight, align, margin, color } = props;
  const { theme } = useTheme();

  const textStyles = {
    fontSize: theme.textSizes[size],
    fontFamily: "Sofia" + weight,
    textAlign: align,
    marginBottom: theme.spacing[margin],
    color: color ? color : "#000",
  };

  return (
    <>
      <TextRn style={textStyles}>{children}</TextRn>
    </>
  );
};

Text.defaultProps = {
  size: "s",
  weight: "",
  align: "left",
  margin: "m",
  color: "",
};

export default Text;
