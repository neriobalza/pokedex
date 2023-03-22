import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Input, Text, TextButton } from "@components/basics";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "@hooks/useAuth";

const SignInForm = (props) => {
  const { signIn } = props;
  const navigation = useNavigation();
  const user = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (values) => {
      signIn(values);
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  useEffect(() => {
    if (user) formik.resetForm();
  }, [user]);

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

      <TextButton
        color="blue"
        weight="Medium"
        onPress={() => {
          navigation.navigate("ResetPwd");
        }}
      >
        I forgot my password
      </TextButton>

      <Button title="Lets go!" onPress={formik.handleSubmit} />

      <View>
        {formik.errors.email && (
          <Text align="center" color="danger" weight="Medium">
            {formik.errors.email}
          </Text>
        )}

        {formik.errors.password && (
          <Text align="center" color="danger" weight="Medium">
            {formik.errors.password}
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
  };
};

const validationSchema = () => {
  return {
    email: Yup.string().email().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
  };
};

export default SignInForm;
