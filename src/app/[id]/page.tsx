"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieType } from "../types";
import { getData } from "../apiServices/request";
import Image from "next/image";

const SingleMovie = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const movieId = parseInt(id as string);
  console.log(typeof movieId);
  const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;
  const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const endpoint = `${BASE_URL}/popular?api_key=${TMDB_KEY}`;
  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await getData(endpoint);
        if (response) {
          console.log(response.data);
          setMovies(response.data);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMovies();
    setLoading(false);
  }, []);

  const movie: any = movies.find((item: MovieType) => item.id === movieId);
  console.log(movie?.poster_path);
  return (
    <div>
      Single page
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Image
            width={400}
            height={500}
            priority
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{movie?.title}</h2>
          <p>Release Date: {movie?.release_date}</p>
          <p className="mt-3">Rating: {movie?.vote_average}</p>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
