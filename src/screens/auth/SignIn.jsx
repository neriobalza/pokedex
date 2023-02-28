import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Screen,
  Button,
  Divider,
  Title,
  SignInForm,
  Loader,
} from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@hooks";
import { auth } from "@database";

const SignIn = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);

  const signIn = (values) => {
    console.log("Signing In");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Title>Sign In</Title>

        <SignInForm signIn={signIn} />

        <Divider />

        <Button
          title="Create an account"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </View>

      {loading && <Loader />}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default SignIn;
