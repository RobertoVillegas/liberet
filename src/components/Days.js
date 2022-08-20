import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, DAYS } from "../constants";

const Days = () => {
  const [selectedDay, setSelectedDay] = useState(4);

  const Day = ({ dayLabel, dayNumber, active, onPress }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.dayContainer}
      >
        <Text>{dayLabel}</Text>
        <View style={active && styles.active}>
          <Text style={active && styles.textActive}>{dayNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {DAYS.map((day, index) => (
        <Day
          key={index}
          dayLabel={day[0]}
          dayNumber={day[1]}
          active={index === selectedDay}
          onPress={() => setSelectedDay(index)}
        />
      ))}
    </View>
  );
};

export default Days;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: COLORS.primary.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.secondary.lightGray,
  },
  active: {
    backgroundColor: COLORS.primary.yellow,
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.primary.white,
  },
  dayContainer: {
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.secondary.white,
  },
  textActive: {
    color: COLORS.primary.white,
  },
});
