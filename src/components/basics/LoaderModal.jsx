import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";
import useTheme from "@hooks/useTheme";

const LoaderModal = (props) => {
  const { visible } = props;
  const theme = useTheme();

  const containerStyles = {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.fadedWhite,
  };

  return (
    <Modal transparent={true} visible={visible} animationType="none">
      <View style={containerStyles}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default LoaderModal;
