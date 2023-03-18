import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Header } from "@components";

const Team = (props) => {
  const { navigation } = props;

  return (
    <Screen>
      <View style={styles.container}>
        <Header title="Team" icon="person-circle-outline" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontFamily: "SofiaMedium",
  },
});

export default Team;
