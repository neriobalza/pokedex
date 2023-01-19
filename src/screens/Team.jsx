import React from "react";
import { ScrollView, StatusBar, SafeAreaView, View, Text } from "react-native";

const Team = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#efefef" barStyle="dark-content" />

      <View>
        <Text>Poke Team</Text>
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Team;
