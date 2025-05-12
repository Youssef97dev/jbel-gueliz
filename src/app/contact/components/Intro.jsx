import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-10  px-2">
      <h1 className="font-medium text-4xl lg:text-5xl text-center text-background">{`Besoin d'un dépannage rapide ?`}</h1>
      <p className="text-base lg:text-xl text-center">{`Notre équipe est dispo 24h/24 pour vous assister en cas de panne, crevaison, batterie à plat ou autre urgence.`}</p>
    </div>
  );
};

export default Intro;
