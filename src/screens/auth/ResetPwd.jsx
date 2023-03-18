import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Text, Button, Input, Screen, Header } from "@components";

const ResetPwd = () => {
  return (
    <Screen>
      <Header />

      <View style={styles.container}>
        <View style={styles.form}>
          <Title align="left">Reset Password</Title>

          <Text>
            Enter the email associated with your account and we'll send an email
            with instruccions to reset your password.
          </Text>

          <Input label="Email:" placeholder="Your email.." />

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
    marginBottom: 60,
  },
});

export default ResetPwd;
