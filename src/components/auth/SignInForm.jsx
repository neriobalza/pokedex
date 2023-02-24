import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Divider,
  Input,
  Text,
  TextButton,
  Title,
} from "@components/basics";

const SignInForm = (props) => {
  const { switchLogin } = props;
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (values) => {
      validateLogin(values);
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  const validateLogin = (values) => {
    const { email, password } = values;

    console.log("Need to set up the sign in");
  };

  const goToForgotPassword = () => {
    navigation.navigate("Password");
  };

  return (
    <View style={styles.container}>
      <Title>Sign In</Title>

      <View>
        <Input
          label="Email:"
          placeholder="Email..."
          value={formik.values.userName}
          onChange={(e) => formik.setFieldValue("userName", e)}
        />

        <Input
          label="Password:"
          placeholder="Password..."
          password={true}
          value={formik.values.password}
          onChange={(e) => formik.setFieldValue("password", e)}
        />
        <TextButton
          color="#0066ff"
          weight="Medium"
          onPress={goToForgotPassword}
        >
          I forgot my password
        </TextButton>

        <Button title="Lets go!" onPress={formik.handleSubmit} />

        <View>
          {formik.errors.userName && (
            <Text align="center" color="#f00" weight="Medium">
              {formik.errors.userName}
            </Text>
          )}

          {formik.errors.password && (
            <Text align="center" color="#f00" weight="Medium">
              {formik.errors.password}
            </Text>
          )}

          {error && (
            <Text align="center" color="#f00" weight="Medium">
              {error.message}
            </Text>
          )}
        </View>

        <Divider />

        <Button title="Create an account" onPress={switchLogin} />
      </View>
    </View>
  );
};

const initialValues = () => {
  return {
    userName: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    userName: Yup.string().required("User name is a required field"),
    password: Yup.string().required("Password is a required field"),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default SignInForm;
