import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@mui/material"
import MovieCard from '@/app/search/MovieCard'

export default function MovieCarousel({ movies, loading }) {
  const [api, setApi] = React.useState(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth >= 1024) return 5;
    if (window.innerWidth >= 768) return 3;
    return 2;
  };

  const renderSkeletons = () => {
    return Array(getSlidesPerView()).fill(0).map((_, index) => (
      <CarouselItem key={index} className="w-fit">
        <div className="p-1">
          <Skeleton
            variant="rectangular"
            height={345}
            sx={{
              bgcolor: 'grey.800',
              borderRadius: 2
            }}
          />
        </div>
      </CarouselItem>
    ));
  };

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-fit"
      >
        <CarouselContent>
          {loading
            ? renderSkeletons()
            : movies.map((movie) => (
                <CarouselItem 
                  key={movie.id} 
                  className="w-fit"
                >
                  <div className="p-1 w-fit">
                    <MovieCard movie={movie} className='w-fit'/>
                  </div>
                </CarouselItem>
              ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}