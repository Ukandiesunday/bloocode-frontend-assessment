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
    <div className="p-[20px] lg:p-[50px]">
      <h1 className="text-center mb-3 text-[40px]">Explore Movie details</h1>
      <div className="flex justify-center w-full md:max-w-[1024px] mx-auto ">
        <div className="flex flex-col  border border-[rgb(179,177,177)] rounded-sm">
          <Image
            width={400}
            height={500}
            priority
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
            className="w-full h-64 object-cover rounded"
          />
          <div className="flex flex-col gap-4 mt-3 p-5">
            <h2 className="text-lg font-semibold ">{movie?.title}</h2>
            <p>Release Date: {movie?.release_date}</p>
            <p className="">Rating: {movie?.vote_average}</p>
            <p>{movie?.overview}</p>
            {movie.genre_ids.map((genre: number) => (
              <ul className="flex flex-col gap-4 mt-4">
                <li>Genre: {genre}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
