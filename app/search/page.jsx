'use client'

import { use, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
import { useMovies } from '@/context/moviesContext'
import axios from 'axios'
import { Loader } from 'lucide-react'

export default function SearchPage() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [trending, setTrending] = useState([])
    const {fetchByQuery , fetchTrendingMovies} = useMovies()

    const handleSearch = async (query) => {
        setIsLoading(true)
        try {
            const response = await fetchByQuery(query)
            setMovies(response)
           
        } catch (error) {
            console.error('Error fetching movies:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const fetchTrending = async () => {
            const resp = await fetchTrendingMovies()
            setTrending(resp)
            console.log(trending)
        }
        fetchTrending()
    } , [])

    return (
        <div className='min-h-screen py-7'>
            <SearchBar onSearch={handleSearch} />
            {isLoading && <p className="text-center mt-4 flex justify-center items-center"><Loader /></p>}
            {/* {movies.length === 0 && !isLoading && <p className="text-center mt-4">No movies found</p>} */}
            {movies.length > 0 && <p className="text-sm text-end mt-4">Found {movies.length} movies</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {!movies.length && trending.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

