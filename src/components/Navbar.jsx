"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLogo from "../../public/assets/logo-1.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
        <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16 bg-black">
          <Link href="/">
            <Image
              className="p-1"
              src={NavLogo}
              alt="/"
              width="130"
              height="80"
            />
          </Link>

          <div className="mr-5 ml-2">
            <ul className="hidden md:flex gap-2 text-[#ffffff] items-center">
              <Link href="#about">
                <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                  Sobre
                </li>
              </Link>

              <Link href="#produtos">
                <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                  Produtos
                </li>
              </Link>

              <Link href="#catálogo">
                <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                  Catálogo
                </li>
              </Link>

              <Link href="#depoimentos">
                <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                  Depoimentos
                </li>
              </Link>

              <Link href="#contato">
                <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                  Contato
                </li>
              </Link>

              <Link
                target={"_blank"}
                href="https://escritorio.amakhaparis.com.br/join/102869"
              >
                <li className="ml-3 mr-3 p-1 text-sm uppercase rounded-sm
                bg-orange-500 hover:bg-[#FC8A01] hover:text-[black]">
                  Cadastre-se
                </li>
              </Link>
            </ul>
            <div onClick={handleNav}  className="md:hidden text-white cursor-pointer">
              <AiOutlineMenu size={20} />
            </div>
          </div>
        </div>

        <div
          className={
            nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-900 p-10 ease-in duration-500"
                : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-700"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={NavLogo} width="100" height="80" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="text-white cursor-pointer p-2"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-t border-gray-800 text-center my-4 mt-5 flex justify-center text-white">
                <p className="w-[85%] md:w-[90%]">
                  Amakha Paris, lugar de gente feliz!
                </p>
              </div>
            </div>

            <div className="py-4 flex flex-col border-b border-gray-800 my-4 mt-5 text-white">
              <ul className="uppercase text-white">
                <Link href="/">
                  <li className="py-4 text-sm">Sobre</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Produtos</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">catálogo</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Depoimentos</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contato</li>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://escritorio.amakhaparis.com.br/join/102869"
                >
                  <li
                    className="ml-2 mr-2 mt-10 p-1 text-sm text-center uppercase rounded-sm
              bg-orange-500 hover:bg-[#FC8A01] hover:text-[black]"
                  >
                    Cadastre-se
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
