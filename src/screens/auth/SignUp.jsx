import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Title, SignUpForm, Loader, Navbar } from "@components";

const SignUp = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);

  const signUp = (values) => {};

  return (
    <Screen>
      <Navbar />

      <View style={styles.container}>
        <Title>Sign Up</Title>

        <SignUpForm signUp={signUp} />
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
    marginBottom: 60,
  },
});

export default SignUp;
