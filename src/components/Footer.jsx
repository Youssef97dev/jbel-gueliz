import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full lg:h-[65vh] bg-black flex flex-col-reverse lg:flex-row justify-center gap-5 lg:gap-32 items-center lg:px-44 px-5 py-8 lg:py-0">
      <div className="w-full h-full flex justify-end items-center py-5">
        <Image
          src="/images/map.png"
          alt="depannage gueliz"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap- px-20 text-center">
        <Image
          src="/images/logo-depannage.png"
          width={500}
          height={500}
          alt="depannage jbl gueliz"
          className="w-44 mb-5"
        />
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <h1 className="font-medium text-2xl text-white">{`Address`}</h1>
          <span className="text-white text-xl text-left">{`Rte de safi en face station shell, Merrakech, Maroc`}</span>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-4 mt-5">
          <h1 className="font-medium text-2xl text-white">{`Phone`}</h1>
          <span className="text-white text-xl">{`+212 6 70 02 38 68
`}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
