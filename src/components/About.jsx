import Image from "next/image";
import React from "react";
import Pa from "../../public/assets/About/logo-pa.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center text-center h-auto bg-fixed bg-center  custom-img p-10"
    >
      <div className="absolute bg-black/30 z-[2] p-10" />
      <div className="p-5 bg-black/90 text-white z-[2] mt-[+8rem]">
        <h1 className="text-4xl font-bold">Quem somos</h1>
        <p className="py-5 text-lg">
          A Amakha Paris é uma das maiores marcas de beleza e bem-estar do
          Brasil. A mesma acredita no empreendedorismo social e é a oportunidade
          de negócios para mais de 1 milhão de consultores. São mais de 500
          itens de alta qualidade em seu portfólio.
        </p>

         <div className="flex md:flex-row-reverse flex-col pr-5">
          <div className="flex items-center gap-10 justify-center">
            <Image src={Pa} width="200" height="180" alt="/" />
          </div>

          <p className="p-5 text-white text-center text-lg m-auto px-20 pr-10">
            Em todo o Brasil, você encontra Pontos de Apoio para adquirir os
            produtos. E você também pode ser o empreendedor de um deles.
          </p>
        </div> 
      </div>
    </div>
  );
};

export default About;
