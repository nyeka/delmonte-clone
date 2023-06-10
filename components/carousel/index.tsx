import React, { FC } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box } from "@mui/material";

const CarauselSponsor: FC = () => {
  // const rqAllProgramme = useQuery(['programmeAllType'], async () => await RestProgrammAll())

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-fit h- py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="md:block hidden"
          naturalSlideWidth={10}
          isIntrinsicHeight={true}
          totalSlides={sponsorItems.length - 1}
          visibleSlides={4}
          step={1}
          infinite={true}
          interval={2000}
          isPlaying
          naturalSlideHeight={0}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 bg-primary p-3 rounded-full opacity-20 left-0 ml-8 focus:outline-none hover:opacity-40 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {sponsorItems.map((el, idx) => (
                    <Slide index={idx} key={idx}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <div
                          className="mx-2 sm:30 md:h-80 flex items-center hover:pb-3"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                        >
                          <img
                            src={el}
                            draggable={false}
                            alt="sponsor"
                            width={350}
                            height={150}
                          />
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 bg-primary p-3 rounded-full opacity-20 right-0 mr-8 focus:outline-none hover:opacity-40 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* carausel in screen small */}
        <CarouselProvider
          className="md:hidden sm:block "
          naturalSlideWidth={50}
          isIntrinsicHeight={true}
          totalSlides={sponsorItems.length - 1}
          visibleSlides={2}
          step={1}
          infinite={true}
          interval={1000}
          isPlaying
          naturalSlideHeight={0}
        >
          <div className="relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30  left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-screen h-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {sponsorItems.map((el, idx) => (
                    <Slide index={idx} key={idx}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Box
                          className="mx-2 sm:30 md:h-80 flex items-center"
                          data-aos="zoom-in"
                          data-aos-duration="500"
                        >
                          <img
                            src={el}
                            draggable={false}
                            alt="sponsor"
                            width={350}
                            height={150}
                          />
                        </Box>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default CarauselSponsor;

const sponsorItems: string[] = [
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/ajv.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/bluefire.jpg",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/dsi.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/e.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/es-teh.jpg",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/gokampus.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/indef.webp",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/karirlab.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/mikti.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/mtp.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/pintar.webp",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/psikku.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/sertifikasiku.png",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/toffeedev.webp",
  "https://talenthub.kemnaker.go.id/object-storages/sponsorship/ziliunlogo.png",
];
