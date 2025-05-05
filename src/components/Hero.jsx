import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[65vh] bg-background flex flex-col lg:flex-row justify-center gap-32 items-center lg:px-44 px-8">
      <div className="w-full h-full flex flex-col justify-center items-center gap- px-20 text-center">
        <Image
          src="/images/logo-depannage-2.png"
          width={500}
          height={500}
          alt="depannage jbl gueliz"
          className="w-44 mb-5"
        />
        <h1 className="font-medium text-5xl text-white">{`Assitance Routière 24/7 Fiable`}</h1>
        <span className="text-white">{`Des interventions rapides et sécurisées pour votre tranquillité d'esprit.`}</span>
        <div className="w-full flex justify-center items-center gap-4 px-14 mt-5">
          <Link
            href="#"
            className="w-full px-4 py-2 rounded-md text-white bg-black"
          >{`Appelez maintenant`}</Link>
          <Link
            href="#"
            className="w-full px-4 py-2 rounded-md text-white bg-button"
          >{`Whatsapp`}</Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-end items-center py-5">
        <Image
          src="/images/gueliz-8.jpg"
          alt="depannage gueliz"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
