"use client";
import dynamic from "next/dynamic";

const CarouselHome = dynamic(() => import("./Carousel"), { ssr: false });

export { CarouselHome };
