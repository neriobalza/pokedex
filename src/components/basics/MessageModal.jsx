import React from "react";
import { View, Modal } from "react-native";
import Text from "./Text";
import Button from "./Button";
import { capitalize } from "lodash";
import useTheme from "@hooks/useTheme";

const MessageModal = (props) => {
  const { visible, message, close } = props;
  const theme = useTheme();

  const containerStyles = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: theme.spacing.m,
    backgroundColor: theme.colors.fadedWhite,
  };

  const cardStyles = {
    padding: theme.spacing.m,
    paddingBottom: 0,
    flex: 0.9,
    backgroundColor: theme.colors.background,
    borderRadius: 16,
    elevation: 4,
    gap: theme.spacing.m,
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={containerStyles}>
        <View style={cardStyles}>
          <Text align="center" size="m" weight="SemiBold">
            {capitalize(message)}
          </Text>

          <Button title="Ok" onPress={close} />
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
