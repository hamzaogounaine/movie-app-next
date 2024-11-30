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
import ShowCard from '@/app/search/ShowCard';
import { Skeleton } from '@mui/material';

export default function ShowsSwiper({ shows, loading }) {
  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 5;
    if (window.innerWidth >= 768) return 2;
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
      <SwiperSlide key={index} className='w-full'>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
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
    <div className="w-full">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        freeMode
        modules={[FreeMode, Pagination]}
        className="w-full"
      >
        {loading 
          ? renderSkeletons()
          : shows.map((tv) => (
              <SwiperSlide key={tv.id} className='w-full'>
                <ShowCard tv={tv} />
              </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}