import { View, Text, StyleSheet, FlatList } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealCard } from "../components/MealCard";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { useEffect } from "react";
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
    <FlatList
      data={meals}
      style={styles.rootView}
      renderItem={(itemData) => (
        <MealCard
          meal={itemData.item}
          onPress={() => {
            navigation.navigate("MealDetailScreen", {
              mealId: itemData.item.id,
            });
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  rootView: { flex: 1, paddingHorizontal: 20 },
  separator: { marginTop: 20 },
});
