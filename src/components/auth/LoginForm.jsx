import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.formWrapper}>
        <Text style={styles.label}>User Name:</Text>
        <TextInput
          placeholder="User Name..."
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.userName}
          onChangeText={(e) => formik.setFieldValue("userName", e)}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          placeholder="Password..."
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(e) => formik.setFieldValue("password", e)}
        />

        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Lets go!</Text>
        </TouchableOpacity>

        <View>
          {formik.errors.userName && (
            <Text style={styles.error}>{formik.errors.userName}</Text>
          )}
          {formik.errors.password && (
            <Text style={styles.error}>{formik.errors.password}</Text>
          )}
        </View>
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
    password: Yup.string().required("Password is a required field").min(6),
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },

  title: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20,
    fontFamily: "SofiaBold",
  },

  formWrapper: {
    padding: 20,
  },

  label: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "SofiaSemiBold",
  },

  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "#B3B6B7",
    borderWidth: 2,
    backgroundColor: "#ECF0F1",
    marginBottom: 20,
    fontFamily: "SofiaSemiBold",
  },

  button: {
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2E86C1",
    backgroundColor: "#3498DB",
    marginTop: 10,
  },

  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fefefe",
    fontFamily: "SofiaSemiBold",
  },

  error: {
    textAlign: "center",
    color: "#f00",
  },
});

export default LoginForm;
