import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, Title } from "@components/basics";

const Header = (props) => {
  const { goBack, title, icon, onPress, iconColor } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        {goBack && (
          <CircleButton
            onPress={navigation.goBack}
            icon="arrow-back"
            margin="s"
          />
        )}

        {title && (
          <Title size="l" weight="Bold" margin="none">
            {title}
          </Title>
        )}
      </View>

      {icon && <CircleButton icon={icon} onPress={onPress} color={iconColor} />}
    </View>
  );
};

Header.defaultProps = {
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

export default Header;
