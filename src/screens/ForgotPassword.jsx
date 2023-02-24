import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Text, Button, Input, Screen, Navbar } from "@components";

const ForgotPassword = () => {
  return (
    <Screen>
      <Navbar />

      <View style={styles.container}>
        <View style={styles.form}>
          <Title align="left">Reset Password</Title>

          <Text>
            Enter the email associated with your account and we'll send an email
            with instruccions to reset your password.
          </Text>

          <Input label="Email address:" placeholder="Your email.." />

          <Button title="Submit" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    paddingHorizontal: 20,
    marginBottom: 55,
  },
});

export default ForgotPassword;
