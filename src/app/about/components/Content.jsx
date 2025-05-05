import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="w-full h-full py-10 flex flex-col justify-center items-center gap-5 lg:px-44 px-8">
      <h1 className="font-medium text-5xl">{`Assistance Routière Fiable 7/24`}</h1>
      <h3 className="font-medium text-xl">{`Profitez d'une tranquillité d'esprit totale grâce à nos interventions rapides et efficaces, où que vous soyez.`}</h3>
      <Image
        src="/images/content.png"
        alt="jbel gueliz"
        width={800}
        height={800}
        className="object-contain w-1/2 h-1/2 mt-4"
      />
    </div>
  );
};

export default Content;
