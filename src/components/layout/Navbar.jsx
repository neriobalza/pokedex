import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Title } from "@components/basics";

const Navbar = (props) => {
  const { goBack, title, icon, onPress, iconColor } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        {goBack && (
          <IconButton
            onPress={navigation.goBack}
            icon="arrow-back"
            margin="s"
          />
        )}

        {title && (
          <Title size="m" weight="Medium" margin="none">
            {title}
          </Title>
        )}
      </View>

      {icon && <IconButton icon={icon} onPress={onPress} color={iconColor} />}
    </View>
  );
};

Navbar.defaultProps = {
  goBack: true,
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Navbar;
