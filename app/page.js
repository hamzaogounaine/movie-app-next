'use client'
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import MovieSwiper from '@/components/swiper/moviesSwiper'
import ShowsSwiper from '@/components/swiper/showsSwiper'
import { useMovies } from '@/context/moviesContext'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { fetchTrendingMovies, fetchUpcomingMovies, fetchTrendingShows } = useMovies()
  const [movies, setMovies] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies()
      if (response) {
        setMovies(response)
        setLoading(false)
      } else {
        console.error('Invalid response from fetchTrendingMovies', response)
      }
      const response2 = await fetchUpcomingMovies()
      if (response2) {
        setUpcoming(response2)
        setLoading(false)
      } else {
        console.error('Invalid response from fetchUpcomingMovies', response2)
      }
      const response3 = await fetchTrendingShows()
      if (response3) {
        setShows(response3)
        setLoading(false)
      } else {
        console.error('Invalid response from fetchTrendingShows', response3)
      }
    }
    fetchMovies()
  }, [fetchTrendingMovies, fetchUpcomingMovies, fetchTrendingShows])

  const OPTIONS = { loop: true, duration: 1 }

  return (
    <div className='min-h-screen px-5 lg:px-8 mx-auto '>
      <div className=''>
        <h1 className='text-2xl w-[200px] font-bold my-4 bg-gradient-to-r  from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text'>
          Trending Today
        </h1>
        <EmblaCarousel slides={movies} options={OPTIONS} loading={loading} />
      </div>
      {/* <div className='w-full'>
        <h1 className='text-2xl font-bold my-4 bg-gradient-to-r w-fit from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text'>
          Trending Shows
        </h1>
        <ShowsSwiper shows={shows} loading={loading} />
      </div>*/}
      <h1 className='text-2xl font-bold my-4 bg-gradient-to-r w-fit from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text'>
        Upcoming Movies
      </h1>
      <div className='w-full'>
        <MovieSwiper movies={upcoming} loading={loading} />
      </div> 
    </div>
  )
}
export default Page