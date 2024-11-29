'use client'
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const moviesContext = createContext();
const api_key = "8bd47a15fc6a5e16f7199b7c9907e363";
const base_url = "https://api.themoviedb.org/3";

const MoviesProvider = ({ children }) => {

    const fetchTopRatedMovies = async () => {
        const response = await axios.get(`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
        return response.data.results;
      };

    const fetchTrendingMovies = async () => {
      const response = await axios.get(`${base_url}/trending/all/day?api_key=${api_key}`);
      return response.data.results;
    };
    
    const fetchByQuery = async (query) => {
      const response = await axios.get(`${base_url}/search/movie?api_key=${api_key}&query=${query}`);
      return response.data.results;
    };

    const getMoviesLogo = async (id) => {
        const response = await axios.get(`${base_url}/movie/${id}/images?api_key=${api_key}`);
        return response.data.logos;
    }

    const fetchUpcomingMovies = async () => {
        const response = await axios.get(`${base_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
        return response.data.results;
    }

    const fetchNowPlayingMovies = async () => {
      const response = await axios.get(`${base_url}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
      return response.data.results;
    }

    const fetchTrendingShows = async () => {
      const response = await axios.get(`${base_url}/trending/tv/day?api_key=${api_key}`);
      return response.data.results;
    }
  return (
    <moviesContext.Provider value={{
      fetchTopRatedMovies,
      fetchTrendingMovies,
      fetchByQuery,
      getMoviesLogo,
      fetchUpcomingMovies,
      fetchNowPlayingMovies,
      fetchTrendingShows
    }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
export { moviesContext };
export const    useMovies = () => {
  return useContext(moviesContext);
}