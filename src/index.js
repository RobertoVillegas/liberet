import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import UserNavigator from "./navigation/UserNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <UserNavigator />
      </NavigationContainer>
    </>
  );
}
