import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Categories } from "./screens/Categories";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./screens/MealsScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";
import { Colors } from "./constants/colors";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetailScreen: { mealId: string };
};

export type Routes = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerTintColor: "white",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: Colors.onAccent700 },
            contentStyle: { backgroundColor: Colors.onAccent500 },
          }}
        >
          <Stack.Screen name="MealsCategories" component={Categories} />
          <Stack.Screen name="MealsOverview" component={MealsScreen} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
