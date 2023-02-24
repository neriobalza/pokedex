import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Pokeball from "./Pokeball";

const Screen = (props) => {
  const { background, style, children } = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={background} barStyle={style} />
      <Pokeball />

      <>{children}</>
    </SafeAreaView>
  );
};

Screen.defaultProps = {
  background: "#efefef",
  style: "dark-content",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
