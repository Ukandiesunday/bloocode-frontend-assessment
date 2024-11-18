"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MovieType } from "./types";
import Image from "next/image";
import { getData } from "./apiServices/request";

const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;
  const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const endpoint = `${BASE_URL}/popular?api_key=${TMDB_KEY}`;
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
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

  // Filter by search
  const filteredMovies = movies.filter((movie) => {
    const matchSearch =
      search === "" || movie.title.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  if (loading) {
    return <h1>loading......</h1>;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-[40px]">
        Welcome Popular Movie Tv
      </h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div>
        {filteredMovies.length === 0 ? (
          <h1 className="flex justify-center text-[40px]">
            Search Result not found
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMovies.map((movie) => (
              <Link key={movie.id} href={`/${movie.id}`}>
                <Image
                  width={400}
                  height={500}
                  priority
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
