import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants";

const Chip = ({ icon, text, size, options }) => {
  const onPressHandler = () => {
    console.log(options);
  };

  return (
    <TouchableOpacity style={styles.chip} onPress={onPressHandler}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 2,
          justifyContent: "space-evenly",
        }}
      >
        <Ionicons name={icon} size={size} color={COLORS.primary.yellow} />
        <Text style={{ paddingStart: 3, fontSize: size }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    flexWrap: "wrap",
    margin: 5,
    borderRadius: 50,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary.lightGray,
  },
});
