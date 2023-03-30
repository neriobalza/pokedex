import React, { useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import {
  Screen,
  Title,
  SignUpForm,
  LoaderModal,
  Header,
  MessageModal,
} from "@components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@database";

const SignUp = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });

  const signUp = async (values) => {
    const { email, password } = values;
    Keyboard.dismiss();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      let message = err.code;
      message = message.slice(message.indexOf("/") + 1).replaceAll("-", " ");
      setError({
        visible: true,
        message: message,
      });
    }
  };

  const closeModal = () => {
    setError({ visible: false, message: "" });
  };

  return (
    <Screen>
      <Header />

      <View style={styles.container}>
        <Title>Sign Up</Title>

        <SignUpForm signUp={signUp} />
      </View>

      <LoaderModal visible={loading} />
      <MessageModal
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
    marginBottom: 60,
  },
});

export default SignUp;
