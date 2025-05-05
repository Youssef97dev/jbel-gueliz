import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full h-[65vh] flex flex-col justify-center items-center gap-16 lg:px-44 px-8">
      <h1 className="font-medium text-6xl">{`Nos Services`}</h1>
      <div className="w-full flex justify-between items-center gap-12">
        <div className="w-full bg-card flex flex-col justify-start items-center gap-3 rounded-lg p-5 text-center h-full px-16">
          <Image
            src="/icons/icon-6.png"
            alt="jbel gueliz"
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <h1 className="font-medium text-2xl">{`Dépannage sur Place`}</h1>
          <p>{`Interventions immédiates pour pannes, crevaisons et problèmes de batterie. Nos techniciens qualifiés vous remettent en route rapidement.`}</p>
        </div>
        <div className="w-full bg-card flex flex-col justify-start items-center gap-3 rounded-lg p-5 text-center h-full px-16">
          <Image
            src="/icons/icon-5.png"
            alt="jbel gueliz"
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <h1 className="font-medium text-2xl">{`Remorquage de Véhicules`}</h1>
          <p>{`Transport sécurisé de votre véhicule sur toutes distances. Que ce soit pour une voiture particulière ou une flotte, nous assurons un service de remorquage fiable.`}</p>
        </div>
        <div className="w-full bg-card flex flex-col justify-start items-center gap-3 rounded-lg p-5 text-center h-full px-16">
          <Image
            src="/icons/icon-1.png"
            alt="jbel gueliz"
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <h1 className="font-medium text-2xl">{`Intervention d'Urgence`}</h1>
          <p>{`Disponible 7/24 pour répondre à vos urgences routières. Bénéficiez d'une assistance rapide et efficace à tout moment.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
