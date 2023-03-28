import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Title,
  Text,
  Screen,
  Header,
  ResetPwdForm,
  MessageModal,
  LoaderModal,
} from "@components";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@database";

const ResetPwd = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Email sent");
    } catch (error) {
      let message = error.code;
      message = message.slice(message.indexOf("/") + 1).replaceAll("-", " ");
      setMessage(message);
    }
    setLoading(false);
  };

  const closeModal = () => {
    setMessage("");
  };

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

          <ResetPwdForm sendEmail={sendEmail} />
        </View>
      </View>

      <LoaderModal visible={loading} />
      <MessageModal
        visible={Boolean(message)}
        message={message}
        close={closeModal}
      />
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
