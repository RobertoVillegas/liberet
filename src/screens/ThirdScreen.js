import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
