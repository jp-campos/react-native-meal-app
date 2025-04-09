import { useContext, useEffect, useState } from "react"
import { Text } from "react-native"
import { FavoritesContext } from "../store/context/favorites-context"
import { MealsList } from "../components/MealsList"
import Meal from "../models/meal"
import { MEALS } from "../data/dummy_data"

export const FavoritesScreen = () => {

    const favoritesContext = useContext(FavoritesContext)
    const [meals, setMeals] = useState<Meal[]>([])

    useEffect(() => {

        const hydratedMeals = MEALS.filter((meal) => favoritesContext.ids.includes(meal.id))
        setMeals(hydratedMeals)
    }, [favoritesContext])

    return <MealsList
        meals={meals}
        onMealPressed={() => { }}
    />
}