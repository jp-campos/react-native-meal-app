import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [] as string[]
    },
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.ids.splice(state.ids.indexOf(action.payload), 1)
        }
    }
})


export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer; 