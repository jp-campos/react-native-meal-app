import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import { CategoryContainer } from "../components/Category";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, Routes } from "../App";

export const Categories = () => {
  const { navigate } = useNavigation<Routes>();
  return (
    <FlatList
      style={{ backgroundColor: "#3a3122" }}
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryContainer
          category={itemData.item}
          onPress={(category) => {
            navigate("MealsOverview", { categoryId: category.id });
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
