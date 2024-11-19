"use client";

import { MovieType } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface FavoritesContextType {
  favorites: MovieType[];
  addFavorite: (movie: MovieType) => void;
  removeFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoritesContextType | undefined>(
  undefined
);

// Custom hook to use the Favorites context
export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(" Must be used within a FavoriteProvider");
  }
  return context;
};

// Provider component
export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorite] = useState<MovieType[]>(
    JSON.parse(localStorage.getItem("favorite") || "[]")
  );

  console.log(favorites, "stored favorites");
  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorite(storedFavorites);
    console.log(storedFavorites, "local favorites");
  }, []);

  // Add a movie to favorites
  const addFavorite = (movie: MovieType) => {
    if (movie) {
      const updatedFavorites = [...favorites, movie];
      setFavorite(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log(movie);
    }
  };

  // Remove a movie from favorites
  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
