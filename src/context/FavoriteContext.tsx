"use client";

import { MovieType } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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
  const [favorites, setFavorite] = useState<MovieType[]>([]);

  console.log(favorites, "stored favorites");
  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorite(storedFavorites);
  }, []);

  // Add a movie to favorites
  const addFavorite = (movie: MovieType) => {
    if (movie) {
      const updatedFavorites = [...favorites, movie];
      setFavorite(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      toast.success("Movie added to favorite list");
    }
  };

  // Remove a movie from favorites
  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    toast.success("Movie removed from list");
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
