"use client";
import React from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const images = [
  {
    src: "/images/gueliz-19.jpg",
  },
  {
    src: "/images/gueliz-20.jpg",
  },
  {
    src: "/images/gueliz-21.jpg",
  },
  {
    src: "/images/gueliz-22.jpg",
  },
  {
    src: "/images/gueliz-23.jpg",
  },
];

const Slides = () => {
  return (
    <div id="gallery" className="relative w-full h-[75vh] ">
      <div className="absolute w-full h-full flex justify-center items-center px-5 md:px-12 lg:px-96 py-10">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width={1000}
                height={1000}
                loading="lazy"
                className="object-cover w-[800px] rounded-md"
                alt={`Casa lalla htakerkoust ${index}`}
              />
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-black absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowBackIos size={28} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-black absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowForwardIos size={28} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
