import { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { getMealByID } from "../util/meals";

const MealItem = ({ item }) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getMealByID(item.idMeal);
        setDetails(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [item.idMeal]);

  if (isLoading) {
    <View style={styles.itemContainer}>
      <Text>Loading...</Text>
    </View>;
  }

  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{ uri: item.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      >
        <Text>{item.strMeal}</Text>
        <Text style={{ color: "yellow" }}>{details.strArea}</Text>
      </ImageBackground>
    </View>
  );
};

export default MealItem;

const numColumns = 2;
const size = (Dimensions.get("window").width - 50) / numColumns;

const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size * 1.2,
    borderRadius: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: "lightblue",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});
