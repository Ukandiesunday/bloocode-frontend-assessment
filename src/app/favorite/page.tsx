"use client";

import React, { useEffect } from "react";
import { useFavorites } from "../../context/FavoriteContext";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";

const FavoritePage = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="mt-[20px] max-w-[1200px] mx-auto p-[20px] md:p-[50px]">
      <div className="flex items-center gap-[50px] text-[30px] md:gap-[70px]  mb-8 md:text-[50px]">
        <Link href={"/"}>
          {" "}
          <FaArrowLeft className="justify-start " />
        </Link>

        <h1 className="">Explore Your Favorite Movies</h1>
      </div>

      {favorites.length === 0 ? (
        <h2 className="flex justify-center items-center text-[30px] mt-[50px]">
          No Favorite Movies Added yet.....
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {favorites.map((movie) => (
            <div key={movie.id} className="">
              <div className="w-full">
                <MovieCard movie={movie} key={movie.id} />

                <button
                  className="text-red-500 text-[20px] font-bold mt-2"
                  onClick={() => removeFavorite(movie.id)}
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
