import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Navbar = (props) => {
  const { title, icon, navigateTo } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.button}>
        <Icon name="arrow-back" size={35} color="#fff" />
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>

        {icon && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(navigateTo);
            }}
          >
            {<Icon name={icon} size={40} color="#fff" />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 10,
  },

  title: {
    // backgroundColor: "red",
    fontSize: 35,
    height: 35,
    lineHeight: 40,
    fontFamily: "SofiaMedium",
    color: "#161616",
  },

  button: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
    backgroundColor: "rgba(0,0,0, 0.15)",
  },
});

export default Navbar;
