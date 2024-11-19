"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MovieType } from "../types";
import Image from "next/image";
import { getData } from "../apiServices/request";
import { useFavorites } from "../context/FavoriteContext";
import MovieCard from "@/components/MovieCard";
import Loader from "@/components/Loader";

const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { addFavorite, removeFavorite } = useFavorites();

  const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;
  const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const endpoint = `${BASE_URL}/popular?api_key=${TMDB_KEY}`;
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await getData(endpoint);
        if (response) {
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

  // Filter by search
  const filteredMovies = movies.filter((movie) => {
    const matchSearch =
      search === "" || movie.title.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });
  console.log(loading);
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <div className="p-[20px] md:p-[40px]">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-center text-[25px] md:text-[40px]">
        Welcome To Popular Movie Tv
      </h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded-[7px] outline-[#ee46ee] h-[50px] text-[18px]"
      />

      <div>
        {filteredMovies.length === 0 ? (
          <h1 className="flex justify-center text-[40px]">
            Search Result not found
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {filteredMovies.map((movie) => (
              <div key={movie.id}>
                <Link href={`/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
                <div className="flex gap-3 mt-3">
                  <button
                    className="text-green-500 text-[18px] font-bold"
                    onClick={() => addFavorite(movie)}
                  >
                    Add Favorite
                  </button>
                  <button
                    className="text-red-500 text-[18px] font-bold"
                    onClick={() => removeFavorite(movie.id)}
                  >
                    Remove Favorite
                  </button>

                  <Link
                    className=" text-[18px] font-bold ml-4"
                    href={"/favorite"}
                  >
                    See favorite
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
