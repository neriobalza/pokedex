import React from "react";
import { View } from "react-native";
import { Text, Input, Button } from "@components/basics";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPwdForm = (props) => {
  const { sendEmail } = props;

  const form = useFormik({
    initialValues: initialValues(),
    onSubmit: ({ email }) => {
      sendEmail(email);
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  return (
    <View>
      <Input
        placeholder="Email..."
        value={form.values.email}
        onChange={(e) => form.setFieldValue("email", e)}
      />

      {form.errors.email && (
        <Text align="center" color="danger" weight="Medium">
          {form.errors.email}
        </Text>
      )}

      <Button title="Send email!" onPress={form.handleSubmit} />
    </View>
  );
};

const initialValues = () => {
  return {
    email: "",
  };
};

const validationSchema = () => {
  return {
    email: Yup.string().email().required(),
  };
};

export default ResetPwdForm;
