import { Pressable, StyleSheet, Text } from "react-native";
import Category from "../models/category";

export const CategoryContainer = ({
  category,
  onPress,
}: {
  category: Category;
  onPress: (category: Category) => void;
}) => {
  return (
    <Pressable
      onPress={() => onPress(category)}
      key={category.id}
      style={[styles.categoryContainer, { backgroundColor: category.color }]}
    >
      <Text style={styles.categoryTitle}>{category.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    overflow: "hidden",
  },
  categoryTitle: {
    textAlign: "center",
    fontWeight: "semibold",
    fontSize: 22,
  },
});
