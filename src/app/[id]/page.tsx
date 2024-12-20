"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieType } from "../../types";
import { getData } from "../../apiServices/request";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import Link from "next/link";
import Loader from "@/components/Loader";
const SingleMovie = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const [loading, setLoading] = useState(true);

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
  }, [endpoint]);

  const movie: any = movies.find((item: MovieType) => item.id === movieId);
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <div className="p-[20px] lg:p-[50px]">
      <div className="flex gap-[50px] text-[30px] md:gap-[100px] justify-center items-center mb-8 md:text-[50px]">
        <Link href={"/"}>
          {" "}
          <FaArrowLeft className="justify-start " />
        </Link>

        <h1 className="capitalize">Explore Movie Details</h1>
      </div>

      <div className="flex justify-center w-full md:max-w-[1024px] mx-auto ">
        <div className="flex flex-col  border border-[rgb(179,177,177)] rounded-sm">
          <Image
            width={400}
            height={500}
            alt={movie?.title || "movie title"}
            priority
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            className="w-full h-64 object-cover rounded"
          />
          <div className="flex flex-col gap-4 mt-3 p-5">
            <h2 className="text-lg font-semibold ">{movie?.title}</h2>
            <p>Release Date: {movie?.release_date}</p>
            <p className="">Rating: {movie?.vote_average}</p>
            <p>{movie?.overview}</p>
            {movie?.genre_ids?.map((genre: number, ind: number) => (
              <ul key={ind} className="flex flex-col gap-4 mt-4">
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
