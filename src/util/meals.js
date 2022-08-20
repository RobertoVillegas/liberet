import { URL } from "../constants";

export const getMealsByIngredient = async (meal = "Beef") => {
  const response = await fetch(`${URL}/filter.php?c=${meal}`);
  const data = await response.json();
  return data.meals;
};

export const getMealByID = async (id) => {
  const response = await fetch(`${URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};

export const getMealCategories = async () => {
  const response = await fetch(`${URL}/categories.php`);
  const data = await response.json();
  return data.categories;
};
