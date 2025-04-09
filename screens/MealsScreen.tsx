import { View, Text, StyleSheet, FlatList } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealCard } from "../components/MealCard";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { useEffect } from "react";
import { MealsList } from "../components/MealsList";
type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

export const MealsScreen = ({ navigation, route }: Props) => {
  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );
  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === route.params.categoryId;
    })?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, route]);

  return (
    <MealsList
      meals={meals}
      onMealPressed={(id) => {
        navigation.navigate("MealDetailScreen", {
          mealId: id,
        });
      }}
    />
  );
};

