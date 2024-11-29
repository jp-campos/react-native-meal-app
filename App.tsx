import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Categories } from "./screens/Categories";
import {
  createStaticNavigation,
  NavigationContainer,
  NavigationProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./screens/MealsScreen";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

export type Routes = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "MealsCategories",
  screenOptions: {
    headerTintColor: "white",
    headerTitleStyle: { color: "white" },
    headerStyle: { backgroundColor: "#351401" },
    contentStyle: { backgroundColor: "#3a3122" },
  },
  screens: {
    MealsCategories: {
      screen: Categories,
      options: {
        title: "All categories",
      },
    },
    MealsOverview: MealsScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
