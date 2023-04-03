import Image from "next/image";
import React from "react";
import Pa from "../../public/assets/About/logo-pa.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center text-center h-auto bg-fixed bg-center bg-gray-300 p-10"
    >
      <div className="p-5 m-5 bg-black/90 text-white  z-[2] mt-[+8rem] font-serif">
        <h1 className="text-4xl uppercase">Quem somos</h1>
        <p className="py-5 px-3 md:text-justify text-center text-lg font-serif md:px-20">
          A Amakha Paris é uma das maiores marcas de beleza e bem-estar do
          Brasil. A mesma acredita no empreendedorismo social e é a oportunidade
          de negócios para mais de 1 milhão de consultores. São mais de 500
          itens de alta qualidade em seu portfólio.
        </p>

        <div className="flex md:flex-row-reverse flex-col md:pr-5">
          <div className="flex items-center gap-10 justify-center">
            <Image src={Pa} width="200" height="180" alt="/" />
          </div>

          <p className="p-5 px-3 text-white md:text-justify text-center m-auto md:px-20 md:pr-10 py-5 text-lg font-serif">
            Em todo o Brasil, você encontra Pontos de Apoio para adquirir os
            produtos. E você também pode ser o empreendedor de um deles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
