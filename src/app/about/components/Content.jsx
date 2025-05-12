import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="w-full h-full py-10 flex flex-col justify-center items-center gap-5 lg:px-44 px-8">
      <h1 className="font-medium text-4xl lg:text-5xl text-center">{`Assistance Routière Fiable 7/24`}</h1>
      <h3 className="font-medium text-base lg:text-xl text-center">{`Profitez d'une tranquillité d'esprit totale grâce à nos interventions rapides et efficaces, où que vous soyez.`}</h3>
      <Image
        src="/images/content.png"
        alt="jbel gueliz"
        width={800}
        height={800}
        className="object-contain lg:w-1/2 lg:h-1/2 w-full h-full mt-4"
      />
    </div>
  );
};

export default Content;
