import React, { useState, useEffect } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import {
  Screen,
  Button,
  Divider,
  Title,
  SignInForm,
  Loader,
  Modal,
} from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@hooks";
import { auth } from "@database";

const SignIn = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const user = useAuth();

  useEffect(() => {
    if (user) {
      navigation.navigate("Pokedex");
    }
  }, [user]);

  const signIn = async (values) => {
    const { email, password } = values;
    Keyboard.dismiss();
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((err) => {
        let message = err.code;
        message = message.slice(message.indexOf("/") + 1).replaceAll("-", " ");

        setTimeout(() => {
          setError({
            visible: true,
            message: message,
          });
        }, 50);
      });
    setLoading(false);
  };

  const closeModal = () => {
    setError({ visible: false, message: "" });
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

      <Modal
        message={error.message}
        visible={error.visible}
        close={closeModal}
      />
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