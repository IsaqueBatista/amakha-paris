import Image from "next/image";
import React from "react";
import Perfume from "../../public/assets/Produtos/perfumes.png";

const Products = () => {
  return (
    <div className="m-auto p-10 pb-5 flex justify-center bg-gradient-to-t from-gray-400 to-gray-300">
      <div className="p-2 items-center md:flex gap-2 bg-gradient-to-t from-gray-500 via-gray-400 to-gray-200 rounded-md">
        <div className="xl:ml-10">
          <Image src={Perfume} width="950" height="650" alt="Perfume logo" />
        </div>
        <div className="mx-5 p-1 bg-gradient-to-t from-gray-600 via-gray-500 to-slate-300 rounded-md">
          <h3 className="pt-10 pl-5 pr-20">Perfumaria</h3>
          <p className="pr-10 pl-5 pt-10 flex text-start md:text-center text-white">
            Amakha significa “perfume” no idioma africano Zulu.
          </p>
          <p className="py-4 pr-20 pl-5 text-white">
            Trazemos em nosso nome a paixão pelo universo da perfumaria. Somos
            sucesso pela diversidade de criações perfumísticas e a altíssima
            concentração de óleos essenciais. São mais de 100 perfumes com até
            24 horas de fixação.
          </p>
          <p className="pr-20 pl-5 pb-5 text-white">
            Nosso portfólio foi desenvolvido em parceria com as principais Casas
            de Fragrâncias Internacionais, o que garante qualidade e adequação
            às tendências do mercado mundial de perfumes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
