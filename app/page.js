'use client'
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import MovieSwiper from '@/components/swiper/moviesSwiper'
import { useMovies } from '@/context/moviesContext'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { fetchTrendingMovies } = useMovies()
  const [movies, setMovies] = useState([])
  const [slides, setSlides] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies()
      if (response) {
        setMovies(response)
      } else {
        console.error('Invalid response from fetchTrendingMovies', response)
      }
    }
    fetchMovies()
  }, [fetchTrendingMovies])
  
    
  const OPTIONS = { loop: true, duration: 30 }

  return (
    <div className='min-h-screen max-sm:hidden'>
      <EmblaCarousel slides={movies} options={OPTIONS} />
      <MovieSwiper />
    </div>
  )
}

export default Page