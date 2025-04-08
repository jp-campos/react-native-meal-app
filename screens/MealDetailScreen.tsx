import {
  Button,
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
import { useEffect, useLayoutEffect } from "react";
import { Colors } from "../constants/colors";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { FavoriteBtn } from "../components/FavoriteBtn";


type Props = NativeStackScreenProps<RootStackParamList, "MealDetailScreen">;

export const MealDetailScreen = ({ navigation, route }: Props) => {
  const meal = MEALS.find((meal) => meal.id == route.params.mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <FavoriteBtn onPressed={() => console.log('hola')} />;
      }
    })
  }, [])

  useEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? "Meal not found",
    });
  }, [navigation, meal]);

  if (!meal) return <></>;

  const onHeaderBtnPressed = () => {
    console.log('pressed')
  }

  return (
    <ScrollView nestedScrollEnabled style={{ marginBottom: 10 }}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Title>{meal.title}</Title>
      <View style={styles.mealDataContainer}>
        <Text style={styles.text}>{meal.duration} min</Text>
        <Text style={styles.text}>{meal.affordability}</Text>
        <Text style={styles.text}>{meal.complexity}</Text>
      </View>
      <SectionList items={meal.ingredients} title="Ingredients" />
      <View style={{ marginTop: 10 }} />
      <SectionList items={meal.steps} title="Steps" />
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

const SectionList = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <>
      <Subtitle>{title}</Subtitle>
      <ScrollView nestedScrollEnabled style={styles.list}>
        {items.map((item, i) => {
          const separator = i == 0 ? {} : { marginTop: 10 };
          return (
            <View key={item} style={separator}>
              <Item ingredient={item} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  mealDataContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "white",
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
