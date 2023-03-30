import React from "react";
import { View } from "react-native";
import { Input, Button, Text } from "@components/basics";
import { useFormik } from "formik";
import * as Yup from "yup";

const UpdateNameForm = (props) => {
  const { update } = props;

  const form = useFormik({
    initialValues: initialValues(),
    onSubmit: ({ name }) => {
      update(name);
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  return (
    <View>
      <Input
        label="User Name"
        placeholder="Name..."
        value={form.values.name}
        onChange={(e) => form.setFieldValue("name", e)}
      />

      {form.errors.name && (
        <Text align="center" color="danger" weight="Medium">
          {form.errors.name}
        </Text>
      )}

      <Button title="Update" onPress={form.handleSubmit} />
    </View>
  );
};

const initialValues = () => {
  return {
    name: "",
  };
};

const validationSchema = () => {
  return {
    name: Yup.string().required("User is a required field"),
  };
};

export default UpdateNameForm;
