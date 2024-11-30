import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useMovies } from "@/context/moviesContext";
import { Button } from "../ui/button";
import { Info, Play } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { Skeleton } from "@mui/material";

const EmblaCarousel = (props) => {
  const { slides, options, loading } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const { getMoviesLogo } = useMovies();
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogosAndUpdateMovies = async () => {
      const newLogos = [];
      const updatedMovies = slides.map(async (movie) => {
        const logo = await getMoviesLogo(movie.id);
        const englishLogo = logo.find((logo) => logo.iso_639_1 === "en");
        newLogos.push(englishLogo);
        return { ...movie, logo: englishLogo };
      });
      setLogos(newLogos);
    };

    fetchLogosAndUpdateMovies();
  }, [slides]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {loading && (
          <Skeleton
            variant="rounded"
            className="dark:bg-gray-300 "
            height="50%"
          />
        )}
        <div className="embla__container bg-black rounded-3xl">
          {slides.map((movie, index) => (
            <div key={movie.id} className="embla__slide relative w-fit">
              {movie !== undefined && (
                <>
                  <img
                    className="embla__slide__img opacity-50 h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    width='100px'
                  />
                  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-1/4">
                    {logos[index] && (
                      <>
                        <img
                          src={`https://image.tmdb.org/t/p/original${logos[index].file_path}`}
                          className="z-50"
                          width={400}
                          alt=""
                        />
                        <div className="flex gap-3">
                          <Button className="mt-4 flex gap-2">
                            <MdPlayArrow className="w-8 h-8" />
                            Watch Now
                          </Button>
                          <Button
                            className="mt-4 flex gap-2"
                            variant="secondary"
                          >
                            <Info className="w-8 h-8" />
                            Show more
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons max-sm:hidden">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;