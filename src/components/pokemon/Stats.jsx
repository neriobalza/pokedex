import React from "react";
import { StyleSheet, View } from "react-native";
import { capitalize } from "lodash";
import { Text } from "@components/basics";
import useTheme from "@hooks/useTheme";

const Stats = (props) => {
  const { stats = [] } = props;
  const theme = useTheme();

  const barStyles = (num) => {
    const color = num > 49 ? theme.colors.green : theme.colors.red;
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.container}>
      <Text size="m" margin="none" weight="SemiBold">
        Stats
      </Text>

      <View style={styles.statsList}>
        {stats.map((elm, i) => (
          <View key={i} style={styles.stat}>
            <View style={styles.statName}>
              <Text margin="none" weight="Medium">
                {capitalize(elm.stat.name)}
              </Text>
              <Text margin="none">{elm.base_stat}</Text>
            </View>

            <View style={styles.statData}>
              <View style={styles.statBgBar}>
                <View style={[styles.statBar, barStyles(elm.base_stat)]}></View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 8,
  },
  statsList: { gap: 8 },

  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  statName: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statData: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  statBgBar: {
    flex: 1,
    backgroundColor: "#ddd",
    height: 5,
    borderRadius: 5,
    overflow: "hidden",
  },

  statBar: {
    height: 5,
    borderRadius: 5,
  },
});

export default Stats;
