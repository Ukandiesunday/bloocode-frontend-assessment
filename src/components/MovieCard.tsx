import { useFavorites } from "@/context/FavoriteContext";
import { MovieType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        width={400}
        height={500}
        priority
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie?.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
