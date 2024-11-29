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

const EmblaCarousel = (props) => {
  const { slides, options } = props;
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
        <div className="embla__container">
          {slides.map((movie, index) => (
            <div key={movie.id} className="embla__slide relative">
              {movie !== undefined && (
                <>
                  <img
                    className="embla__slide__img opacity-50"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="A cool cat."
                  />
                  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-50">
                    {logos[index] && (
                      <>
                        <img
                          src={`https://image.tmdb.org/t/p/original${logos[index].file_path}`}
                          className=""
                          width={400}
                          alt=""
                        />
                        <div className="flex gap-3">

                        <Button className="mt-4 flex gap-2" size='lg'><MdPlayArrow className="w-8 h-8" />Watch Now</Button>
                        <Button className="mt-4 flex gap-2" size='lg' variant='secondary'><Info className="w-8 h-8" />Show more</Button>
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
        <div className="embla__buttons">
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
