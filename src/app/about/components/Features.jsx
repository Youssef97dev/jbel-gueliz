import React from "react";

const Features = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center lg:px-44 px-8 py-12 bg-feature">
      <h1 className="font-medium text-5xl text-background">{`Les valeurs de notre entreprise`}</h1>
      <div className="w-full flex justify-between items-start gap-40 mt-8 text-center">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Fiabilité`}</h1>
          <p className="text-lg">{`Nous garantissons un service sur lequel vous pouvez toujours compter, 24h/24 et 7j/7.`}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Réactivité`}</h1>
          <p className="text-lg">{`Chaque minute compte : nous intervenons rapidement pour vous permettre de reprendre la route sans attendre.`}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Professionnalisme`}</h1>
          <p className="text-lg">{`Notre équipe est composée de techniciens expérimentés, formés pour répondre efficacement à chaque situation.`}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-start gap-40 mt-8 text-center">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Sécurité`}</h1>
          <p className="text-lg">{`Votre sécurité est notre priorité. Nos interventions sont réalisées dans le respect des normes et de votre tranquillité.`}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Engagement client`}</h1>
          <p className="text-lg">{`À l’écoute et disponibles, nous plaçons la satisfaction de nos clients au cœur de nos actions.`}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-background text-2xl font-medium">{`Transparence`}</h1>
          <p className="text-lg">{`Pas de mauvaises surprises : nous communiquons clairement sur nos tarifs et nos prestations.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
