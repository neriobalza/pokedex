import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Text from "./Text";

const Input = (props) => {
  const { label, placeholder, value, onChange, password } = props;

  return (
    <View>
      {label && (
        <Text weight="SemiBold" size="m" margin="s">
          {label}
        </Text>
      )}

      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
  input: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "#B3B6B7",
    borderWidth: 2,
    backgroundColor: "#ECF0F1",
    marginBottom: 16,
    fontFamily: "SofiaMedium",
  },
});

export default Input;
