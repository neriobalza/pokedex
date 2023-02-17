import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import useAuth from "@hooks/useAuth";

const userData = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBlock}>
          <Image
            style={styles.image}
            source={{
              uri: user.image,
            }}
            alt={user.name}
          />
        </View>

        <View style={styles.userNameBlock}>
          <Text style={styles.userName}>{user.userName}</Text>
        </View>

        <View style={styles.content}>
          <UserDataItem title="First Name" data={user.firstName} />
          <UserDataItem title="Last Name" data={user.lastName} />
          <UserDataItem title="Email" data={user.email} />
        </View>
      </View>

      <View style={styles.logout}>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutLabel}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UserDataItem = (props) => {
  const { title, data } = props;

  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}:</Text>
      <Text style={styles.itemData}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  imageBlock: { marginTop: 20, alignItems: "center" },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userNameBlock: { marginVertical: 20 },
  userName: {
    textAlign: "center",
    fontSize: 36,
    textTransform: "capitalize",
    fontFamily: "SofiaMedium",
  },

  content: {
    paddingHorizontal: 20,
  },

  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    paddingVertical: 20,
  },

  itemTitle: {
    paddingRight: 8,
    width: 100,
    fontFamily: "SofiaSemiBold",
    fontSize: 16,
  },
  itemData: {
    fontFamily: "Sofia",
    fontSize: 16,
    textTransform: "capitalize",
  },

  logout: {
    paddingVertical: 15,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#930001",
    width: 120,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  logoutLabel: {
    textAlign: "center",
    fontFamily: "SofiaSemiBold",
    fontSize: 22,
    color: "#fefefe",
  },
});

export default userData;
