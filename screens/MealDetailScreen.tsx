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
    <ScrollView nestedScrollEnabled>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Title>{meal.title}</Title>
      <Subtitle>Ingredients</Subtitle>
      <ScrollView nestedScrollEnabled style={styles.list}>
        {meal.ingredients.map((ingredient, i) => {
          const separator = i == 0 ? {} : { marginTop: 10 };
          return (
            <View key={ingredient} style={separator}>
              <Item ingredient={ingredient} />
            </View>
          );
        })}
      </ScrollView>
      <View style={{ marginTop: 10 }} />
      <Subtitle>Steps</Subtitle>
      <ScrollView nestedScrollEnabled style={styles.list}>
        {meal.ingredients.map((ingredient, i) => {
          const separator = i == 0 ? {} : { marginTop: 10 };
          return (
            <View key={ingredient} style={separator}>
              <Item ingredient={ingredient} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const Item = ({ ingredient }: { ingredient: string }) => {
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
    height: 200,
    marginHorizontal: 40,
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
