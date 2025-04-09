import Meal from "../models/meal";
import { FlatList, StyleSheet, View } from "react-native";
import { MealCard } from "./MealCard";

export const MealsList = ({ meals, onMealPressed }: { meals: Meal[], onMealPressed: (id: string) => void }) => {
    return (
        <FlatList
            data={meals}
            style={styles.rootView}
            renderItem={(itemData) => (
                <MealCard
                    meal={itemData.item}
                    onPress={() => onMealPressed(itemData.item.id)}
                />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
}

const styles = StyleSheet.create({
    rootView: { flex: 1, paddingHorizontal: 20 },
    separator: { marginTop: 20 },
});
