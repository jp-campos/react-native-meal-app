import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { ReactNode } from "react"
export const FavoriteBtn = ({ icon, onPressed }: { icon?: ReactNode, onPressed: () => void }) => {

    const child = icon ?? <Ionicons name="star" size={24} color='white' />

    return <Pressable
        onPress={onPressed}
        style={({ pressed }) => pressed && styles.pressed}
    >
        {child}

    </Pressable>
}


const styles = StyleSheet.create({
    pressed: { opacity: 0.7 }
})