import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy_data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useEffect } from "react";
import { Colors } from "../constants/colors";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetailScreen">;

export const MealDetailScreen = ({ navigation, route }: Props) => {
  const meal = MEALS.find((meal) => meal.id == route.params.mealId);

  useEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? "Meal not found",
    });
  }, [navigation, meal]);

  if (!meal) return <></>;

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Title>{meal.title}</Title>
      <Subtitle>Ingredients</Subtitle>
      <FlatList
        style={styles.list}
        data={meal.ingredients}
        renderItem={(itemData) => {
          return (
            <IngredientContainer
              key={itemData.item}
              ingredient={itemData.item}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
      />
    </ScrollView>
  );
};

const IngredientContainer = ({ ingredient }: { ingredient: string }) => {
  return (
    <View style={styles.ingredientCard}>
      <Text style={styles.ingredientText}>{ingredient}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  list: {
    height: 250,
    paddingHorizontal: 30,
  },
  ingredientCard: {
    backgroundColor: Colors.accent500,
    padding: 5,
    borderRadius: 10,
  },
  ingredientText: {
    color: Colors.onAccent500,
    textAlign: "center",
  },
});
