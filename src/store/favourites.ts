import { create } from "zustand";

interface FavoriteState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const useFavorites = create<FavoriteState>((set) => ({
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id],
    })),
}));
