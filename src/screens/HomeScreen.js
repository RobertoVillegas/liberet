import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getMealsByIngredient, getMealCategories } from "../util/meals";
import MealItem from "../components/MealItem";
import Days from "../components/Days";
import Chip from "../components/Chip";
import { COLORS } from "../constants";

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
      <Days />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Chip icon="time" text="2:00 - 3:00 pm" size={12} />
        <Chip
          icon="restaurant"
          text="Cocina industrial"
          size={12}
          options={categories}
        />
        <Chip icon="add" text="Platillos" size={12} />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 10,
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.strCategory}
            style={styles.chip}
            onPress={() => setCategory(category.strCategory)}
          >
            <Text style={styles.chipText}>{category.strCategory}</Text>
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
    borderColor: COLORS.secondary.lightGray,
  },
  chipText: {
    fontSize: 12,
  },
});
