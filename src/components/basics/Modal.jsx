import React from "react";
import { StyleSheet, View, Modal as ModalRn } from "react-native";
import Text from "./Text";
import BUtton from "./Button";
import Button from "./Button";

const Modal = (props) => {
  const { visible, message, close } = props;

  const handleClose = () => {
    close();
  };

  return (
    <ModalRn transparent={true} visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.card}>
          <Text align="center" size="m" weight="SemiBold">
            {message}
          </Text>

          <Button title="Ok" onPress={handleClose} />
        </View>
      </View>
    </ModalRn>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    backgroundColor: "rgba(255,255,255,.25)",
  },
  card: {
    padding: 16,
    paddingBottom: 0,
    flex: 0.9,
    backgroundColor: "white",
    borderRadius: 16,
    elevation: 4,
    gap: 16,
  },
});

export default Modal;
