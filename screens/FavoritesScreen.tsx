import { useContext, useEffect, useState } from "react"
import { Text } from "react-native"
import { FavoritesContext } from "../store/context/favorites-context"
import { MealsList } from "../components/MealsList"
import Meal from "../models/meal"
import { MEALS } from "../data/dummy_data"
import { useNavigation } from "@react-navigation/native"
import { Routes } from "../App"
import { useTypedSelector } from "../hooks/redux-hooks"

export const FavoritesScreen = () => {
    const { navigate } = useNavigation<Routes>()

    const favoriteMealsIds = useTypedSelector((state) => state.favoriteMeals.ids)
    const [meals, setMeals] = useState<Meal[]>([])

    useEffect(() => {

        const hydratedMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id))
        setMeals(hydratedMeals)
    }, [favoriteMealsIds])

    return <MealsList
        meals={meals}
        onMealPressed={(id) => { navigate('MealDetailScreen', { mealId: id }) }}
    />
}