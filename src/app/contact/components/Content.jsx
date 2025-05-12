import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { FcCellPhone, FcSettings } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { FcSmartphoneTablet } from "react-icons/fc";

const Content = () => {
  return (
    <div className="w-full h-full lg:h-[65vh] flex flex-col lg:flex-row justify-center gap-5 lg:gap-32 items-center lg:px-44 px-5">
      <div className="w-full h-full flex flex-col justify-center items-start gap-5 px-5 lg:px-20 text-center">
        <h1 className="text-lg lg:text-xl text-left">{`Appelez-nous maintenant`}</h1>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-start items-center gap-3">
            <FaCheckCircle color="#4b9b56" size={18} />
            <h1 className="text-lg text-left">{`Intervention rapide`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <FaCheckCircle color="#4b9b56" size={18} />
            <h1 className="text-lg text-left">{`Techniciens expérimentés`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <FaCheckCircle color="#4b9b56" size={18} />
            <h1 className="text-lg text-left">{`Service fiable et sécurisé`}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-start items-center gap-3">
            <FaMapMarkerAlt color="#FF0033" size={18} />
            <h1 className="text-lg text-left">{`Guéliz & environs`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <FcCellPhone size={20} />
            <h1 className="text-lg text-left">{`+212 6 70 02 38 68`}</h1>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <MdAlternateEmail color="#4b9b56" size={20} />
            <Link
              href="mailto:contact@depannage-jbelgueliz.com"
              className="text-lg text-left cursor-pointer"
            >{`contact@depannage-jbelgueliz.com`}</Link>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <FcSmartphoneTablet size={25} />
            <h1 className="text-lg text-left">{`Écrivez-nous aussi sur WhatsApp ou via nos réseaux sociaux !`}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-start items-center gap-3">
            <FcSettings size={25} />
            <h1 className="text-lg text-left">{`Dépannage Jbel Guéliz, Toujours là quand vous en avez besoin.`}</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-end items-center py-5">
        <Image
          src="/images/gueliz-14.jpg"
          alt="depannage gueliz"
          width={1000}
          height={1000}
          className="object-cover w-96 h-80 lg:w-full lg:h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Content;
