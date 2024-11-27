import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import Category from "../models/category";
import { CategoryContainer } from "../components/Category";

export const Categories = () => {
  return (
    <FlatList
      style={{ backgroundColor: "#24180f" }}
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryContainer
          category={itemData.item}
          onPress={(category) => console.log("pressed" + category.title)}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
