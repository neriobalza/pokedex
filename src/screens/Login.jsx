import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Pokeball } from "@components";
import { LoginForm } from "@components/auth";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Pokeball />

      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
