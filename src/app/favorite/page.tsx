"use client";

import React, { useEffect } from "react";
import { useFavorites } from "../../context/FavoriteContext";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const FavoritePage = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="mt-[20px] p-[20px] md:p-[50px]">
      <div className="flex gap-[50px] text-[30px] md:gap-[100px] justify-center items-center mb-8 md:text-[50px]">
        <Link href={"/"}>
          {" "}
          <FaArrowLeftLong className="justify-start " />
        </Link>

        <h1 className="">Explore Your Favorite Movies</h1>
      </div>

      {favorites.length === 0 ? (
        <h2 className="flex justify-center items-center text-[30px] mt-[50px]">
          No Favorite Movies Added yet.....
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="">
              <div>
                <MovieCard movie={movie} key={movie.id} />

                <button onClick={() => removeFavorite(movie.id)}>
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
