import React, { useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Screen, Title, SignUpForm, Loader, Navbar, Modal } from "@components";
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
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        let message = err.code;
        message = message.slice(message.indexOf("/") + 1).replaceAll("-", " ");

        setError({
          visible: true,
          message: message,
        });
      });
    setLoading(false);
  };

  const closeModal = () => {
    setError({ visible: false, message: "" });
  };

  return (
    <Screen>
      <Navbar />

      <View style={styles.container}>
        <Title>Sign Up</Title>

        <SignUpForm signUp={signUp} />
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
    marginBottom: 60,
  },
});

export default SignUp;