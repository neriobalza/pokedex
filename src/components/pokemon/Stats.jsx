import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stats = (props) => {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>

      <View>
        {stats.map((elm) => {
          return (
            <View key={elm.stat.name} style={styles.stat}>
              <View style={styles.statNameContainer}>
                <Text style={styles.statName}>{elm.stat.name}</Text>
              </View>

              <View style={styles.statDataContainer}>
                <Text style={styles.statNumber}>{elm.base_stat}</Text>

                <View style={styles.statBgBar}>
                  <View
                    style={[styles.statBar, barStyles(elm.base_stat)]}
                  ></View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },

  stat: {
    flexDirection: "row",
    marginBottom: 10,
  },

  statNameContainer: {
    width: "30%",
  },

  statName: {
    fontSize: 14,
    textTransform: "capitalize",
  },

  statDataContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },

  statNumber: {
    width: "12%",
    textAlign: "center",
  },

  statBgBar: {
    width: "88%",
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
