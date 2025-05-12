import Image from "next/image";
import Link from "next/link";

const Planification = () => {
  return (
    <div className="w-full h-full lg:h-[65vh] flex flex-col lg:flex-row justify-center gap-5 lg:gap-32 items-center lg:px-44 px-5 py-8 lg:py-0">
      <div className="w-full h-full flex flex-col justify-center items-start gap-5 px-5 lg:px-20 text-center">
        <h1 className="font-medium text-4xl lg:text-5xl">{`Démarrez Facilement`}</h1>
        <span className="text-sm lg:text-base">{`Suivez ces étapes simples pour bénéficier de notre assistance.`}</span>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-start items-center gap-1">
            <Image
              src="/icons/icon-2.png"
              alt="jbel gueliz"
              width={100}
              height={100}
              className="w-14 h-14 object-cover"
            />
            <h1 className="text-xl lg:text-2xl font-medium text-left">{`1. Contactez-Nous Immédiatement`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-1">
            <Image
              src="/icons/icon-3.png"
              alt="jbel gueliz"
              width={100}
              height={100}
              className="w-14 h-14 object-cover"
            />
            <h1 className="text-xl lg:text-2xl font-medium text-left">{`2. Recevez Un Service Rapide`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-1">
            <Image
              src="/icons/icon-4.png"
              alt="jbel gueliz"
              width={100}
              height={100}
              className="w-14 h-14 object-cover"
            />
            <h1 className="text-xl lg:text-2xl font-medium text-left">{`3. Reprenez La Route En Toute Sérénité`}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-4 pr-0 lg:pr-64 mt-5">
          <Link
            href="tel:+212670023868"
            className="w-full px-4 py-2 rounded-md text-white bg-black"
          >{`Planifiez votre intervention`}</Link>
          <Link
            href="http://wa.me/212670023868"
            className="w-full px-4 py-2 rounded-md text-white bg-button"
          >{`Discutez sur WhatsApp`}</Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-end items-center py-5">
        <Image
          src="/images/gueliz-20.jpg"
          alt="depannage gueliz"
          width={1000}
          height={1000}
          className="object-cover w-96 h-80 lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
};

export default Planification;
