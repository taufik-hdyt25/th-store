"use client";

import { Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const images = [
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
  "https://shorthand.com/the-craft/types-of-image-file-formats/assets/UPhtO6IIvn/sh-unsplash_4qgbmezb56c-4096x2731.jpeg",
  "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
];

const CarouselHome = () => {
  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {images.map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={"100%"}
              height={{ base: "fit-content", md: 400 }}
              objectFit={"cover"}
              rounded={"md"}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
