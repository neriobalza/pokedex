import React from "react";
import { Modal, ActivityIndicator } from "react-native";

const LoaderModal = (props) => {
  const { visible } = props;
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <ActivityIndicator size="large" />
    </Modal>
  );
};

export default LoaderModal;
