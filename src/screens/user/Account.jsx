import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { signOut, updateProfile } from "firebase/auth";
import {
  Screen,
  Header,
  Text,
  Button,
  LoaderModal,
  Input,
  Divider,
  UpdateNameForm,
} from "@components";
import useAuth from "@hooks/useAuth";
import { auth } from "@database";

const Account = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useAuth();

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {}
    setLoading(false);
    navigation.reset({ index: 0, routes: [{ name: "SignIn" }] });
  };

  const updateDisplayName = async (name) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Header navigation={navigation} title="Account" />
        <View>
          {user && (
            <View style={styles.main}>
              <Text size="m" weight="SemiBold">
                Email
              </Text>
              <Text>{user.email}</Text>

              <Divider />
              {user.displayName ? (
                <>
                  <Text size="m" weight="SemiBold">
                    Name
                  </Text>
                  <Text>{user.displayName}</Text>
                </>
              ) : (
                <UpdateNameForm update={updateDisplayName} />
              )}
              <Divider />
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
  main: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  bottom: { padding: 16, paddingBottom: 0 },
});

export default Account;
