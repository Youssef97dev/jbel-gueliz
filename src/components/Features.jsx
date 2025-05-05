import React from "react";
import Image from "next/image";

const imagesList = [
  "/images/gueliz-4.jpg",
  "/images/gueliz-13.jpg",
  "/images/gueliz-6.jpg",
  "/images/gueliz-9.jpg",
  "/images/gueliz-1.jpg",
];

const Features = () => {
  return (
    <div className="w-full h-[65vh] bg-background flex flex-col justify-center items-center gap-5 lg:px-44 px-8">
      <h1 className="font-medium text-6xl text-white">{`Ne Restez Pas Bloqué`}</h1>
      <span className="text-white text-lg">{`Ne laissez pas une panne vous perturber`}</span>
      <div className="w-full flex justify-between items-center gap-8 text-white mt-5">
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <b className="font-medium text-6xl">{`+400`}</b>
          <span className="text-lg">{`Clients Satisfaits`}</span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <b className="font-medium text-6xl">{`%20`}</b>
          <span className="text-lg">{`Temps Économisé`}</span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <b className="font-medium text-6xl">{`7/24`}</b>
          <span className="text-lg">{`Assistance d'Urgence`}</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-6">
        {imagesList.map((item, i) => (
          <Image
            key={i}
            src={item}
            width={500}
            height={500}
            alt="jbel gueliz"
            className="w-56 h-40 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
