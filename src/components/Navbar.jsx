"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "../../public/assets/Navbar/logo-1.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16 bg-black">
        <a href="#about">
          <Image
            className="p-1"
            src={NavLogo}
            alt="Logo Amakha Paris"
            width="130"
            height="80"
          />
        </a>

        <div className="flex mr-3 ml-2">
          <ul className="hidden md:flex gap-1 text-[#ffffff] items-center">
            <a href="#about">
              <li className="mr-3 text-sm uppercase hover:border-b">Sobre</li>
            </a>

            <a href="#products">
              <li className="ml-3 mr-3 text-sm uppercase hover:border-b">
                Produtos
              </li>
            </a>

            <a href="#catalogo">
              <li className="ml-3 mr-3 text-sm uppercase hover:border-b">
                Catálogo
              </li>
            </a>

            <a href="#depositions">
              <li className="ml-3 mr-3 text-sm uppercase hover:border-b">
                Depoimentos
              </li>
            </a>

            <a href="#contact">
              <li className="ml-3 mr-3 text-sm uppercase hover:border-b">
                Contato
              </li>
            </a>

            <Link
              target={"_blank"}
              href="https://escritorio.amakhaparis.com.br/join/102869"
            >
              <li
                className="ml-3  p-1 px-3 text-sm uppercase rounded-sm
                bg-orange-500 hover:bg-[#FC8A01] hover:text-[black]"
              >
                Cadastro
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-white cursor-pointer"
          >
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
              : "fixed left-[-400%] h-screen top-0 p-10 ease-in duration-700"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="#about">
                <Image
                  src={NavLogo}
                  width="100"
                  height="80"
                  alt="Logo Amakha Paris"
                />
              </a>
              <div
                onClick={handleNav}
                className="text-white cursor-pointer p-2"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-t border-gray-800 text-center my-4 mt-8 flex justify-center text-white">
              <p className="w-[85%] md:w-[90%]">
                Amakha Paris, lugar de gente feliz!
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col border-b border-gray-800 my-4 mt-5 text-white">
            <ul className="uppercase text-white">
              <a href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Sobre</li>
              </a>
              <a href="#products">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Produtos</li>
              </a>
              <a href="#catalogo">
                <li onClick={() => setNav(false)} className="py-4 text-sm">catálogo</li>
              </a>
              <a href="#depositions">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Depoimentos</li>
              </a>
              <a href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Contato</li>
              </a>
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

          <div className="text-zinc-200 flex justify-center">
            <p className="mb-4">Entre em contato:</p>
          </div>

          <div className="flex items-center justify-center max-w-[330px] m-auto py-4 pt-1 gap-3">
          {/*  */}

          <a
            href="https://api.whatsapp.com/send?phone=5534992225485&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Isaque%2C%20seja%20bem-vindo!"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-white rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaWhatsapp />
            </div>
          </a>

          <a
            href="https://www.instagram.com/amakha_paris_amakha/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-white rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaInstagram />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/isaque-batista-oliveira-50432024a/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-white rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaLinkedinIn />
            </div>
          </a>

          <a
            href="mailto:isaquebatista1716@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-white rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <AiOutlineMail />
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
