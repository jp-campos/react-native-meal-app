import { View, Text, StyleSheet, FlatList } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealCard } from "../components/MealCard";
import { MEALS } from "../data/dummy_data";
type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

export const MealsScreen = ({ route }: Props) => {
  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );
  return (
    <FlatList
      data={meals}
      style={styles.rootView}
      renderItem={(itemData) => <MealCard meal={itemData.item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  rootView: { flex: 1, paddingHorizontal: 20 },
  separator: { marginTop: 20 },
});
