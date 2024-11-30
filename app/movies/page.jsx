"use client";
import { useMovies } from "@/context/moviesContext";
import React, { useEffect, useState } from "react";
import MovieCard from "../search/MovieCard";
import { Skeleton } from "@mui/material";
import MovieCardSkeleton from "../search/MovieSkeleton";

const page = () => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchTopRatedMovies } = useMovies();

  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await fetchTopRatedMovies();
      console.log(response);
      if (response) {
        setTopRated(response);
        setLoading(false);
      } else {
        console.error("Invalid response from fetchTopRatedMovies", response);
      }
    };
    fetchTopRated();
  });
  return (
    <div>
      <h1 className="text-2xl w-[200px] font-bold my-4 bg-gradient-to-r  from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
        Movies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {loading &&
          new Array(6).fill(0).map((_, index) => <MovieCardSkeleton />)}
        {topRated.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default page;
