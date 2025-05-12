import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="w-full h-full lg:h-[55vh] flex flex-col-reverse lg:flex-row justify-center gap-10 items-center lg:px-60 px-8 py-8 lg:py-0">
      <div className="w-full h-full flex justify-end items-center py-5">
        <Image
          src="/images/gueliz-11.jpeg"
          alt="depannage gueliz"
          width={1000}
          height={1000}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start gap-5 pr-0 lg:pr-20">
        <h1 className="font-medium text-4xl lg:text-5xl">{`Votre Partenaire de Confiance`}</h1>
        <p className="">{`Avec plus de 15 ans d'expérience et des milliers de clients satisfaits, notre équipe de techniciens experts est prête à intervenir rapidement pour résoudre vos problèmes routiers. Nous comprenons l'urgence de vos situations et nous nous engageons à fournir une assistance efficace et fiable, 24h/7 ,24j/7.`}</p>
        <div className="w-full flex justify-between items-start gap-4 mt-5">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-medium text-background">{`15+`}</h1>
            <span className="text-xl font-medium text-center">{`Années de Service`}</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-medium text-background">{`2000+`}</h1>
            <span className="text-xl font-medium text-center">{`Interventions Réussies`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
