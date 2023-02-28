import React, { useState } from "react";
// Components
import { View } from "react-native";
import { Button, Input, Text } from "@components/basics";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = (props) => {
  const { signUp } = props;
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (values) => {
      const { password, confirmPassword } = values;
      setError(null);
      if (password === confirmPassword) {
        signUp(values);
      }
      setError("Passwords don't match");
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  return (
    <View>
      <Input
        label="Email:"
        placeholder="Email..."
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue("email", e)}
      />

      <Input
        label="Password:"
        placeholder="Password..."
        password={true}
        value={formik.values.password}
        onChange={(e) => formik.setFieldValue("password", e)}
      />

      <Input
        placeholder="Confirm password..."
        password={true}
        value={formik.values.confirmPassword}
        onChange={(e) => formik.setFieldValue("confirmPassword", e)}
      />

      <Button title="Create now!" onPress={formik.handleSubmit} />

      <View>
        {formik.errors.email && (
          <Text align="center" color="#f00" weight="Medium">
            {formik.errors.email}
          </Text>
        )}

        {formik.errors.password && (
          <Text align="center" color="#f00" weight="Medium">
            {formik.errors.password}
          </Text>
        )}

        {error && (
          <Text align="center" color="#f00" weight="Medium">
            {error}
          </Text>
        )}
      </View>
    </View>
  );
};

const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
};

const validationSchema = () => {
  return {
    email: Yup.string().email().required("Email is a required field"),
    password: Yup.string().required("Password is a required field").min(6),
    confirmPassword: Yup.string().required("Password is a required field"),
  };
};

export default SignUpForm;
