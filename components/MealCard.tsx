import { Image, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";

export const MealCard = ({ meal }: { meal: Meal }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <Text
        style={styles.subtitle}
      >{`${meal.duration} ${meal.affordability}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 5,
  },
});
