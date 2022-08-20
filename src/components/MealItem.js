import { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { getMealByID } from "../util/meals";
import { COLORS } from "../constants";

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
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
      </ImageBackground>
      <View style={styles.remaining}>
        <Text style={styles.remainingText}>
          Quedan {item.idMeal.substring(0, 1)}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 5, left: 5 }}>
        <Text
          style={{
            color: COLORS.primary.white,
          }}
        >
          {item.strMeal}
        </Text>
        <Text
          style={{
            color: COLORS.primary.yellow,
          }}
        >
          {details.strArea}
        </Text>
      </View>
    </View>
  );
};

export default MealItem;

const numColumns = 2;
const size = (Dimensions.get("window").width - 50) / numColumns;

const styles = StyleSheet.create({
  background: {
    height: "25%",
    borderRadius: 10,
  },
  itemContainer: {
    width: size,
    height: size * 1.2,
    borderRadius: 10,
    shadowColor: COLORS.primary.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2.5,
    elevation: 5,
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
    justifyContent: "flex-end",
  },
  remaining: {
    borderRadius: 8,
    backgroundColor: COLORS.primary.white,
    padding: 2.5,
    position: "absolute",
    top: 5,
    right: 5,
  },
  remainingText: {
    color: COLORS.primary.orange,
    fontSize: 12,
  },
});
