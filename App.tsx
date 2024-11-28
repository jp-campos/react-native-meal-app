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
  screens: {
    MealsCategories: Categories,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
