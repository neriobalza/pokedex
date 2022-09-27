import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, ScrollView } from "react-native";

const ScrollContainer = (props) => {
  const { children } = props;
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({});
