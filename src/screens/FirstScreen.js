import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
