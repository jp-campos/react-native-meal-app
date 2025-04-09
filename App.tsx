import { StatusBar } from "expo-status-bar";
import { Categories } from "./screens/Categories";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./screens/MealsScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";
import { Colors } from "./constants/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from "./store/context/favorites-context";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetailScreen: { mealId: string };
};

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
}

export type Routes = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return <Drawer.Navigator initialRouteName='Categories' screenOptions={{
    headerTintColor: "white",
    headerTitleStyle: { color: "white" },
    headerStyle: { backgroundColor: Colors.onAccent700 },
    sceneStyle: { backgroundColor: Colors.onAccent500 },
    drawerInactiveBackgroundColor: '#42231',

    drawerContentStyle: { backgroundColor: '#351401' },
    drawerActiveTintColor: '#eda67e',
    drawerLabelStyle: { color: 'white' },

    drawerInactiveTintColor: 'white'

  }}>

    <Drawer.Screen name='Categories' component={Categories} options={{ drawerIcon: () => <Ionicons name="list" color='white' size={24} /> }} />
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{ drawerIcon: () => <Ionicons name="star" color='white' size={24} /> }} />

  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
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
            <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="MealsOverview" component={MealsScreen} />
            <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
