import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { signOut, updateProfile } from "firebase/auth";
import { Screen, Header, Text, Button, LoaderModal, Input } from "@components";
import useAuth from "@hooks/useAuth";
import { auth } from "@database";

const Account = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {}
    setLoading(false);
    navigation.reset({ index: 0, routes: [{ name: "SignIn" }] });
  };

  const updateDisplayName = async () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Header navigation={navigation} title="Account" />
          {user && (
            <View style={styles.top}>
              <Text size="m" weight="SemiBold">
                Email
              </Text>
              <Text>{user.email}</Text>

              <Input label="User Name" />
              <Button title="Save" />
            </View>
          )}
        </View>

        <View style={styles.bottom}>
          <Button title="Sign out" color="danger" onPress={signOutUser} />
        </View>
      </View>

      <LoaderModal visible={loading} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  top: {
    padding: 16,
  },
  bottom: { padding: 16 },
});

export default Account;
