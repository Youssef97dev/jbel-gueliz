import React from "react";
import Image from "next/image";

const images = [
  "/images/gueliz-23.jpg",
  "/images/gueliz-21.jpg",
  "/images/gueliz-10.jpg",
  "/images/gueliz-5.jpg",
  "/images/gueliz-18.jpg",
  "/images/gueliz-15.jpg",
  "/images/gueliz-2.jpg",
  "/images/gueliz-3.jpg",
  "/images/gueliz-6.jpg",
  "/images/gueliz-7.jpg",
  "/images/gueliz-9.jpg",
  "/images/gueliz-12.jpg",
  "/images/gueliz-16.jpg",
  "/images/gueliz-17.jpg",
  "/images/gueliz-19.jpg",
];

const Gallery = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-10 lg:px-44 px-8 py-12 bg-feature">
      <h1 className="font-medium text-5xl">{`Gallery Photos`}</h1>
      <div className="grid grid-cols-3 gap-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md w-full h-full"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-96 h-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
