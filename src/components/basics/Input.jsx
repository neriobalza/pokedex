import React from "react";
import { View, TextInput } from "react-native";
import Text from "./Text";
import useTheme from "@hooks/useTheme";

const Input = (props) => {
  const { label, placeholder, value, onChange, password } = props;
  const theme = useTheme();

  const inputStyles = {
    height: 50,
    borderWidth: 2,
    justifyContent: "center",
    fontFamily: "SofiaMedium",
    paddingHorizontal: 16,
    fontSize: theme.fontSize.text.s,
    borderRadius: theme.spacing.s,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.background,
    marginBottom: theme.spacing.m,
  };

  return (
    <View>
      {label && (
        <Text weight="SemiBold" size="m" margin="s">
          {label}
        </Text>
      )}

      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        secureTextEntry={password}
        placeholderTextColor="#B3B6B7"
      />
    </View>
  );
};

Input.defaultProps = {
  placeholder: "...",
  password: false,
};

export default Input;
