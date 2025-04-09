import { createContext, ReactNode, useState } from 'react'


export const FavoritesContext = createContext({
    ids: [] as string[],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { },
    isFavorite: ((id: string) => { }) as (id: string) => boolean,
})
const l = 2

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {

    const [favorites, setFavorites] = useState<string[]>([])

    const addFavorite = (id: string) => {
        setFavorites([...favorites, id]);
        console.log('add favorite')
    }

    const removeFavorite = (idToRemove: string) => {
        setFavorites(favorites.filter((id) => id != idToRemove))
        console.log('remove favorite')

    }

    const isFavorite = (id: string) => favorites.includes(id)

    return <FavoritesContext.Provider value={{ ids: favorites, addFavorite: addFavorite, removeFavorite: removeFavorite, isFavorite: isFavorite }}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider