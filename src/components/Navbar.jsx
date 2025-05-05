"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Transition } from "@headlessui/react";

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black w-full py-3 lg:px-44 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-7 z-30">
        <Image
          src="/images/logo-depannage.png"
          width={500}
          height={500}
          alt="depannage jbl gueliz"
          className="lg:w-20 w-16"
        />{" "}
        {/* Logo */}
        <span className="text-white lg:block hidden">
          Dépannage Jbel Guéliz
        </span>
      </div>
      <ul className="lg:flex space-x-10 hidden">
        <li>
          <a
            href="/"
            className={`${
              path === "/" ? "text-orange-300" : "text-white"
            } hover:text-orange-300`}
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`${
              path === "/about" ? "text-orange-300" : "text-white"
            } hover:text-orange-300`}
          >
            À propos de nous
          </a>
        </li>
        <li>
          <a
            href="/gallery"
            className={`${
              path === "/gallery" ? "text-orange-300" : "text-white"
            } hover:text-orange-300`}
          >
            Galerie
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`${
              path === "/contact" ? "text-orange-300" : "text-white"
            } hover:text-orange-300`}
          >
            Contactez-nous
          </a>
        </li>
      </ul>
      {/* Menu Icon */}
      <div className="pt-2 block lg:hidden z-30">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed bg-black top-0 left-0 w-full h-screen bg-color_black z-20 flex flex-col items-center justify-start">
          <ul className="absolute top-44 space-y-5 uppercase md:space-y-10 text-center text-white text-xl md:text-3xl font-light">
            <li>
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
                À propos de nous
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setIsOpen(!isOpen)}>
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
