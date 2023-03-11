import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLogo from "../../public/assets/logo-1.png";

export default function Navbar() {

  return (
    <div>
      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16 bg-black">
        <Link href="/">
          <Image className="p-1" src={NavLogo} alt="/" width="130" height="80" />
        </Link>

        <div className="mr-5">
          <ul
            className="hidden md:flex gap-2 text-[#ffffff] p-5 items-center"
          >
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
              <li className="ml-4 mr-4 text-sm uppercase rounded-sm bg-orange-500 hover:bg-[#FC8A01] hover:text-[black] p-1">
                Cadastre-se
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
