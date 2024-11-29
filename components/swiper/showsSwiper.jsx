'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../../styles/globals.css";
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCard from '@/app/search/MovieCard';
import ShowCard from '@/app/search/ShowCard';
import { Skeleton } from '@mui/material';

export default function ShowsSwiper({shows, loading}) {
  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 5;
    if (window.innerWidth >= 768) return 3;
    return 2;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Skeleton rendering function
  const renderSkeletons = () => {
    return Array(slidesPerView).fill(0).map((_, index) => (
      <SwiperSlide key={index} className='w-1/5'>
        <Skeleton 
          variant="rectangular" 
          width={230} 
          height={345} 
          sx={{ 
            bgcolor: 'grey.800', 
            borderRadius: 2 
          }} 
        />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={5}
        modules={[FreeMode, Pagination]}
        className="max-w-screen-lg"
      >
        {loading 
          ? renderSkeletons()
          : shows.map((tv) => (
              <SwiperSlide key={tv.id} className='w-1/5'>
                <ShowCard tv={tv} />
              </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}