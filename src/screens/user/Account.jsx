import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Header } from "@components";
import useAuth from "@hooks/useAuth";

const Account = (props) => {
  const { navigation } = props;
  const user = useAuth();

  return (
    <Screen>
      <View style={styles.container}>
        <Header navigation={navigation} title="Account" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Account;
