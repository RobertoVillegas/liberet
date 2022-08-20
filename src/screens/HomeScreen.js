import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { getMealsByIngredient, getMealCategories } from "../util/meals";
import MealItem from "../components/MealItem";

const COLORS = {
  primary: {
    orange: "#FCAB3F",
    yellow: "#FDC963",
    darkGray: "#4D4D4D",
    white: "#FFFFFF",
  },
  secondary: {
    green: "#A1D2CE",
    red: "#F49897",
    lightGray: "#E4E4E4",
    beige: "#FEF2F1",
  },
};

const HomeScreen = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const response = await getMealsByIngredient(category);
        setMeals(response);
      } catch (error) {
        console.log(error);
      }
    };

    loadMeals();
  }, [category]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await getMealCategories();
        setCategories(response);
      } catch (error) {
        console.log(error);
      }
    };

    loadCategories();
  }, []);

  const alert = () => {
    Alert.alert("Alerta", "Alerta de prueba", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK" },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View>
        <Button title="Alert" onPress={alert} />
      </View>
      <Text>HOME SCREEN</Text>
      <Text>Categories</Text>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
        }}
      >
        <TouchableOpacity style={styles.chip}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 2,
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons name="time" size={13} color={COLORS.primary.yellow} />
            <Text style={{ paddingStart: 3, fontSize: 12 }}>
              2:00 - 3:00 pm
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 2,
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons
              name="restaurant"
              size={12}
              color={COLORS.primary.yellow}
            />
            <Text style={{ paddingStart: 3, fontSize: 12 }}>
              Cocina industrial
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 2,
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons name="add" size={12} color={COLORS.primary.yellow} />
            <Text style={{ paddingStart: 3, fontSize: 12 }}>Platillos</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.strCategory}
            style={styles.chip}
            onPress={() => setCategory(category.strCategory)}
          >
            <Text>{category.strCategory}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={meals}
        renderItem={(item) => <MealItem item={item.item} />}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-evenly",
          margin: 5,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  chip: {
    flexWrap: "wrap",
    margin: 5,
    borderRadius: 50,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
