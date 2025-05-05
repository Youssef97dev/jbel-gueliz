import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-0 lg:px-44 px-8 py-14 bg-background text-white">
      <h1 className="font-medium text-5xl">{`Assistance routière à Marrakech`}</h1>
      <p className="mt-5">{`Dépannage Jbel Guéliz est une entreprise locale spécialisée dans l’assistance et le dépannage routier à Marrakech. Depuis notre création, nous mettons tout en œuvre pour offrir un service rapide, efficace et de confiance à tous les automobilistes en difficulté.`}</p>
      <p className="mt-2">{`Grâce à notre équipe expérimentée et disponible 24h/24 et 7j/7, nous intervenons dans les plus brefs délais, que ce soit pour une panne, un remorquage, une crevaison, une batterie à plat ou tout autre souci mécanique`}</p>
      <p className="mt-2">{`• Notre mission : vous permettre de reprendre la route en toute sécurité, le plus rapidement possible.`}</p>
      <p className="mt-1">{`• Notre engagement : un service professionnel, des tarifs clairs et une assistance humaine à chaque étape.`}</p>
      <p className="mt-2">{`Faites confiance à Dépannage Jbel Guéliz - Votre partenaire de confiance sur les routes de Marrakech.`}</p>
    </div>
  );
};

export default Intro;
