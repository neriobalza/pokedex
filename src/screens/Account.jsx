import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Screen, Navbar } from "@components";
import { LoginForm } from "@components/auth";
import useAuth from "@hooks/useAuth";

const Account = (props) => {
  const { navigation } = props;
  const { user } = useAuth();

  return (
    <Screen>
      <View style={styles.container}>
        <Navbar navigation={navigation} title="Account" />

        {user ? <></> : <LoginForm />}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Account;
