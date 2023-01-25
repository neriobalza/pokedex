import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Navbar } from "@components";

const Team = (props) => {
  const { navigation } = props;

  return (
    <Screen>
      <View style={styles.wrapper}>
        <Navbar
          navigation={navigation}
          title="Team"
          icon="person-circle-outline"
          navigateTo="Account"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    fontSize: 40,
    fontFamily: "SofiaMedium",
  },
});

export default Team;
