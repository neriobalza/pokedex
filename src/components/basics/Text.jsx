import React from "react";
import { Text as TextRn } from "react-native";
import useTheme from "@hooks/useTheme";

const Text = (props) => {
  const { children, size, weight, align, margin, white } = props;
  const theme = useTheme();

  const textStyles = {
    fontSize: theme.fontSize.text[size],
    fontFamily: "Sofia" + weight,
    textAlign: align,
    marginBottom: theme.spacing[margin],
    color: !white ? theme.colors.text : theme.colors.white,
  };

  return <TextRn style={textStyles}>{children}</TextRn>;
};

Text.defaultProps = {
  size: "s",
  weight: "",
  align: "left",
  margin: "m",
  white: false,
};

export default Text;
